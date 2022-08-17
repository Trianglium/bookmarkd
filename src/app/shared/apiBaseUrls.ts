class APIBase {
    public base_url: string;
    public docs: string;

    public constructor(base_url: string, docs: string) {
        this.base_url = base_url;
        this.docs = docs;
    }
}
export class importIO {
    base_url: string;
    docs: 'http://api.docs.import.io/#rss.import.io';
};

export class tasteDrive {
    base_url: string;
    docs: string;
};

export class openLibrary {
    base_url
}