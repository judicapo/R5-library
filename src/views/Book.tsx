import React, { useState, useEffect } from 'react';
import { Flex, Box, Card, Image, Text, Heading, Button } from 'rebass';
import { Gap } from '@components/gap/Gap';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '@store/index';
import { LoadingComponent } from '@components/loading/Loading';
import { useLocation } from 'react-router-dom';
import { Book as book } from '@store/redux/book/types';
import { useAuth0 } from '@middleware/authorization';
import { Label, Input, Textarea } from '@rebass/forms';
import { REVIEW_ACTIONS, Review } from '@store/redux/review/types';

const Book = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [review, setReview] = useState<string>('');
  const [selectedBook, setSelectedBook] = useState<book>();

  const dispatch = useDispatch();
  const { queriedBooks } = useSelector((state: GlobalState) => state.bookReducer);
  const { appLoading } = useSelector((state: GlobalState) => state.appReducer);
  const { storedReviews } = useSelector((state: GlobalState) => state.reviewReducer);

  const { state: { id } } = useLocation();
  const { isLoading, user, isAuthenticated } = useAuth0();

  const onSubmit = (username: string, review: string): void => {
    dispatch({
      type: REVIEW_ACTIONS.REVIEW_SAVE, data: {
        username,
        review,
        bookInfoLink: id,
      },
    });
  };

  useEffect(() => {
    setUsername(user.name);
  }, [user]);

  useEffect(() => {
    if (queriedBooks) {
      setSelectedBook(queriedBooks.find((b: book) => (
        b.volumeInfo.infoLink === id
      )));
    }
  }, [queriedBooks]);

  return (appLoading ? <LoadingComponent /> :
    <>
      <Gap size={30} />
      <Flex mx={-2}>
        <Box width={1 / 6} px={2}>
        </Box>
        <Box width={1} px={2}>
          {selectedBook && <Card p={1}>
            <Flex justifyContent='space-arrownd' alignItems='center'
              alignContent='center' alignSelf='center'
              height='100%'>
              <Image mx={10} src={selectedBook.volumeInfo.imageLinks
                && selectedBook.volumeInfo.imageLinks.smallThumbnail}
                sx={{
                  display: 'block',
                  maxWidth: '100%',
                  height: '100%',
                }}
                width={[200, 350]}
              />
              <Flex flexDirection='column'>
                <Text py={0.5} color='gray' fontWeight={600}>
                  {selectedBook.volumeInfo.averageRating || 'Not rated'}
                </Text>
                <Text py={0.5}>
                  {selectedBook.volumeInfo.title}
                </Text>
                {selectedBook.volumeInfo.authors && selectedBook.volumeInfo.authors.map(a =>
                  <Text key={`${selectedBook.volumeInfo.authors.length}-${a}`} py={0.5}
                    color='gray' fontWeight={600}>
                    {a}
                  </Text>,
                )}
                <Text py={0.5}
                  dangerouslySetInnerHTML={{
                    __html: selectedBook.searchInfo && selectedBook.searchInfo.textSnippet,
                  }}>
                </Text>
              </Flex>
            </Flex>
          </Card>}
        </Box>
        <Box width={1 / 6} px={2}>
        </Box>
      </Flex>
      <Gap size={30} />
      <Flex mx={-2}>
        <Box width={1 / 6} px={2}>
        </Box>
        <Box width={1} px={2}>
          <Card p={1}>
            {!isLoading && user && isAuthenticated ?
              <Flex height='100%' flexDirection='column'>
                {storedReviews.length > 0 &&
                  storedReviews.filter((review: Review) =>
                    review.bookInfoLink === id).map((review: Review) =>
                      < Card p={1}>
                        <Flex mx={-2} mb={3} flexDirection='column'>
                          <Box width={1} px={2}>
                            <Label htmlFor='username'><strong>User</strong></Label>
                            <Gap size={5} />
                            <Text py={0.5}>
                              {review.username}
                            </Text>
                          </Box>
                          <Box width={1} px={2}>
                            <Label htmlFor='review'><strong>Review</strong></Label>
                            <Gap size={5} />
                            <Text py={0.5}>
                              {review.review}
                            </Text>
                          </Box>
                        </Flex>
                      </Card>,
                    )}
                <Heading width={1}
                  fontSize={[2, 3, 4]} color='primary'
                  textAlign='center' py={20}>
                  Write a review
                </Heading>
                <Box width={1}
                  as='form'
                  onSubmit={e => e.preventDefault()}
                  py={3}>
                  <Gap size={10} />
                  <Flex mx={-2} mb={3} flexDirection='column'>
                    <Box width={1} px={2}>
                      <Label htmlFor='username'>User</Label>
                      <Input bg='white'
                        id='username'
                        name='username'
                        value={username}
                        onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                          setUsername(value);
                        }} />
                    </Box>
                    <Box width={1} px={2}>
                      <Label htmlFor='review'>Review</Label>
                      <Textarea
                        id='review'
                        name='review'
                        onChange={({ target: { value } }:
                          React.ChangeEvent<HTMLTextAreaElement>) => {
                          setReview(value);
                        }} />
                    </Box>
                    <Box px={2} ml='auto'>
                      {username && review &&
                        <Button onClick={() => onSubmit(username, review)}>
                          Guardar
                        </Button>
                      }
                    </Box>
                  </Flex>
                </Box>
              </Flex> : <Heading fontSize={[2, 3, 4]} color='primary'
                textAlign='center' py={20}>
                Please login to make a review.
                </Heading>}
          </Card>
        </Box>
        <Box width={1 / 6} px={2}>
        </Box>
      </Flex>
    </>
  );
};

export default Book;
