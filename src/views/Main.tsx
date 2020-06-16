import React from 'react';
import { Flex, Box, Card, Text, Image } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { Gap } from '@components/gap/Gap';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '@store/index';
import { LoadingComponent } from '@components/loading/Loading';
import { BOOK_ACTIONS, Book } from '@store/redux/book/types';
import { useHistory } from 'react-router-dom';

const Home = (): JSX.Element => {
  const MAX_RESULTS: number = 6;

  const dispatch = useDispatch();
  const history = useHistory();
  const { queriedBooks } = useSelector((state: GlobalState) => state.bookReducer);
  const { appLoading } = useSelector((state: GlobalState) => state.appReducer);

  const getBooks = async (book: string): Promise<void> => {
    dispatch({
      type: BOOK_ACTIONS.BOOK_GET_REQUEST, data: {
        method: 'GET',
        path: `${book}&maxResults=${MAX_RESULTS}`,
      },
    });
  };

  return (
    <>
      <Gap size={30} />
      <Flex mx={-2}>
        <Box width={1 / 4} px={2}>
        </Box>
        <Box width={1 / 2} px={2}>
          <Label htmlFor='search'>Search a book</Label>
          <Input
            id='search'
            name='search'
            type='search'
            placeholder='ex. J.K. Rowling'
            onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
              getBooks(value)} />
        </Box>
        <Box width={1 / 4} px={2}>
        </Box>
      </Flex>
      <Gap size={30} />
      {appLoading ? <LoadingComponent /> :
        <Flex mx={-2}>
          <Box width={1 / 6} px={2}>
          </Box>
          <Box width={1} px={2}>
            <Flex mx={-2} flexWrap='wrap'>
              {queriedBooks.length > 0 && queriedBooks.map((book: Book) =>
                <Box px={2} width={1 / 2} onClick={() => history.push(`/book`, {
                  id: book.volumeInfo.previewLink,
                })}>
                  <Card height={200} p={1}>
                    <Flex key={book.volumeInfo.previewLink}
                      justifyContent='space-arrownd' alignItems='center'
                      alignContent='center' alignSelf='center'
                      height='100%'>
                      <Image mx={10} src={book.volumeInfo.imageLinks
                        && book.volumeInfo.imageLinks.smallThumbnail}
                        sx={{
                          display: 'block',
                          maxWidth: '100%',
                          height: '100%',
                        }}
                      />
                      <Flex flexDirection='column'>
                        <Text py={0.5} color='gray' fontWeight={600}>
                          {book.volumeInfo.averageRating || 'Not rated'}
                        </Text>
                        <Text py={0.5}>
                          {book.volumeInfo.title}
                        </Text>
                        {book.volumeInfo.authors && book.volumeInfo.authors.map(a =>
                          <Text key={`${book.volumeInfo.authors.length}-${a}`} py={0.5}
                            color='gray' fontWeight={600}>
                            {a}
                          </Text>,
                        )}
                      </Flex>
                    </Flex>
                  </Card>
                </Box>,
              )}
            </Flex>
          </Box>
          <Box width={1 / 6} px={2}>
          </Box>
        </Flex>
      }
    </>
  );
};

export default Home;
