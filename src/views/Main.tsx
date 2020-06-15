import React, { useState } from 'react';
import { Flex, Box, Card, Text, Image } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { Gap } from '@components/gap/Gap';
import { fetchApi } from '@providers/apiProvider';

interface Book {
  searchInfo: {
    textSnippet: string;
  };
  volumeInfo: {
    allowAnonLogging: boolean;
    authors: [];
    averageRating: number;
    canonicalVolumeLink: string;
    categories: [];
    contentVersion: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    }
    industryIdentifiers: [];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    }
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    ratingsCount: number;
    readingModes: {
      text: boolean;
      image: boolean;
    }
    subtitle: string;
    title: string;
  };
}

interface BookProps {
  items: Book[];
}

const Home = (): JSX.Element => {
  const MAX_RESULTS: number = 6;
  const [books, setBooks] = useState<BookProps>({ items: [] });

  const getBooks = async (book: string): Promise<void> => {
    const response = await fetchApi({
      method: 'GET', path: `${book}&maxResults=${MAX_RESULTS}`,
    });
    const json: BookProps = await response.json();
    setBooks(json);
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
      <Flex mx={-2}>
        <Box width={1 / 6} px={2}>
        </Box>
        <Box width={1 / 2} px={2}>
          <Flex mx={-2}>
            <Box width={1 / 4} px={2}>
            </Box>
            <Box width={1} px={2}>
              {books.items.length > 0 && books.items.map((book: Book) =>
                <Flex key={book.volumeInfo.previewLink}>
                  <Card width={[256, 320]} mx='auto'>
                    <Image src={book.volumeInfo.imageLinks
                      && book.volumeInfo.imageLinks.smallThumbnail} />
                    <Text>
                      {book.volumeInfo.title}
                    </Text>
                  </Card>
                </Flex>,
              )}
            </Box>
            <Box width={1 / 6} px={2}>
            </Box>
          </Flex>
        </Box>
        <Box width={1 / 4} px={2}>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
