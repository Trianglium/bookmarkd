import { Book } from './book';
import { Tag } from './tag';
export class ListEntry {
    book: Book;
    notes: string | null;
    spoilers: boolean = false;
};
export class List {
    name: string;
    description: string | null;
    tags: Tag[] | null;
    public_list: boolean = true;
    ranked_list: boolean = false;
    entries: ListEntry[];
};