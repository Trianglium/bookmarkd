export class AuthorProfile {
    wikipedia: string;
    source_records: any;
    photos: any;
    links: any;
    alternate_names: any;
    remote_ids: any;
    name: string;
    birth_date: string;
    personal_name: string;
    title: string;
    type: any;
    entity_type: string;
    bio: string;
    key: string;
    latest_revision: any;
    revision: any;
    created: any;
    last_modified: any;
};

export class Author {
    key?: string | null;
    name: string;

};

export class AuthorWorks {
    links: any;
    size: any;
    entries: any;
}