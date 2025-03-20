export type TCredentials = {
    readonly username: string;
    readonly passphrase: string;
}

export type TUser = {
    readonly id: number;
    readonly name: string;
    readonly surname: string;
    readonly credentials: TCredentials;
    readonly active: boolean;
    readonly created: string;
    readonly _comment: string;
}

export type TProduct = {
    readonly id: number;
    readonly status: 'active' | 'inactive';
    readonly date_created: string;
    readonly name: string;
}