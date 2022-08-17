export class APIBase {
    public base_url: string;
    public docs: string;

    public constructor(base_url: string, docs: string) {
        this.base_url = base_url;
        this.docs = docs;
    }
};

export const tasteDrive = new APIBase('', '');
export const gutenDex = new APIBase('https://gutendex.com/books', 'https://gutendex.com/');
export const importIO = new APIBase('', 'http://api.docs.import.io/#rss.import.io');
export const openLibrary = new APIBase('http://openlibrary.org/', 'https://openlibrary.org/developers/api');