import { Book } from './book';
import { Tag } from './tag';
export class ListEntry {
    book: Book;
    notes: string;
    spoilers: boolean;
};
export class List {
    name: string;
    description: string;
    tags: Tag[];
    public: boolean;
    ranked: boolean;
    entries: ListEntry[];
};