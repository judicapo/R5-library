import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useAuth0 } from '@middleware/authorization';

interface IValues {
  [key: string]: any;
}

const Profile = (): JSX.Element => {
  const history = useHistory();
  const { user, getIdTokenClaims } = useAuth0();

  const [author, setAuthor] = useState<string>('');
  const [values, setValues] = useState<IValues>([]);

  useEffect(() => {
    if (user) {
      setAuthor(user.name);
    }
  }, [user]);

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = {
      author,
    };
    await submitform(formData);
    setValues({ ...values, formData });
    setTimeout(() => {
      history.push('/');
    }, 1500);
  };

  const submitform = async (formData: {}) => {
    try {
      const accessToken = await getIdTokenClaims();
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/user`, {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          authorization: `Bearer ${accessToken.__raw}`,
        }),
        body: JSON.stringify(formData),
      });
      return response.ok;
    } catch (ex) {
      return false;
    }
  };

  const setFormValues = (formValues: IValues) => {
    setValues({ ...values, ...formValues });
  };
  const handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormValues({ [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmission} noValidate={true}>
          <div >
            <label htmlFor='author'> Author </label>
            <input type='text' id='author' defaultValue={author}
              onChange={e => handleInputChanges(e)} name='author' />
          </div>
          <div>
            <button>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Profile);
