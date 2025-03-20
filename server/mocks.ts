import {TProduct, TUser} from "~/types/api.types";

export const USERS: Array<TUser> = [
    {
        id: 1,
        name: 'David',
        surname: 'Jones',
        credentials: {
            username: 'david.jones@creds.com',
            passphrase: '52ccca432ab28afd90969084c061b23c'
        },
        active: true,
        created: '03.03.2025 10:00:21',
        _comment: "Пользователь David Jones с логином david.jones@creds.com и паролем '8u3&s-1uda'"
    },
    {
        id: 2,
        name: 'Samantha',
        surname: 'Robertson',
        credentials: {
            username: 'sam.robertson@creds.com',
            passphrase: 'cefdd8f05b00320c8ff42f8734f96633'
        },
        active: true,
        created: '03.03.2025 10:28:13',
        _comment: "Пользователь Samantha Robertson с логином sam.robertson@creds.com и паролем '0k91sa639'"
    },
    {
        id: 3,
        name: 'Nicholas',
        surname: 'Crew',
        credentials: {
            username: 'nic.crew@creds.com',
            passphrase: '23c2b519b1e2cd4bbaf5f68f58024785'
        },
        active: false,
        created: '01.03.2025 12:56:28',
        _comment: "Пользователь Nicholas Crew с логином nic.crew@creds.com и паролем '1atr48asf03'"
    }
]

export const PRODUCTS: Array<TProduct> = [
    {id: 1, status: 'active', date_created: '2025-03-01', name: 'Товар A'},
    {id: 2, status: 'inactive', date_created: '2025-03-02', name: 'Товар B'},
    {id: 3, status: 'active', date_created: '2025-03-03', name: 'Товар C'},
    {id: 4, status: 'active', date_created: '2025-03-04', name: 'Товар D'},
    {id: 5, status: 'inactive', date_created: '2025-03-05', name: 'Товар E'},
    {id: 6, status: 'active', date_created: '2025-03-06', name: 'Товар F'},
    {id: 7, status: 'active', date_created: '2025-03-07', name: 'Товар G'},
    {id: 8, status: 'inactive', date_created: '2025-03-08', name: 'Товар H'},
    {id: 9, status: 'active', date_created: '2025-03-09', name: 'Товар I'},
    {id: 10, status: 'active', date_created: '2025-03-10', name: 'Товар J'}
]