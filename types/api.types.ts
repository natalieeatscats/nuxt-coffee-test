export type TCredentials = {
    username: string;
    passphrase: string;
}

export type TUser = {
    id: number;
    name: string;
    surname: string;
    credentials: TCredentials;
    active: boolean;
    created: string;
    _comment: string;
}

export type TProduct = {
    id: number;
    status: 'active' | 'inactive';
    date_created: string;
    name: string;
}