// Action Types
export enum BOOK_ACTIONS {
  BOOK_GET_REQUEST = 'BOOK_GET_REQUEST',
  BOOK_GET_SUCCESS = 'BOOK_GET_SUCCESS',
  BOOK_FAILURE = 'BOOK_FAILURE',
}

export interface Book {
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

export interface BookState {
  queriedBooks: Book[] | any;
  error: any;
}
