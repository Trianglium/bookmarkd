import { Author } from './author';
export class ISBN {
    url: string;
    key: string;
    title: string;
    subtitle: string;
    authors: any;
    number_of_pages: number;
    pagination: string;
    by_statement: string;
    identifiers: any;
    classifications: any;
    publishers: any;
    publish_places: any;
    publish_date: string;
    subjects: any;
    notes: string;
    ebooks: any;
    cover: any;
};
export class LCCN {
    url: string;
    key: string;
    title: string;
    subtitle: string;
    authors: any;
    number_of_pages: number;
    pagination: string;
    identifiers: any;
    classifications: any;
    publishers: any;
    publish_places: any;
    publish_date: string;
    subjects: any;
    cover: any;
};

export class BookData {
    isbn: ISBN;
    lccn: LCCN;

}

export class Book {
    bibkey?: any | null;
    title: string;
    year: string;
    authors: Author[];
    data?: BookData | null;

};

export class BookCover {
    imageSrc: string;
 };