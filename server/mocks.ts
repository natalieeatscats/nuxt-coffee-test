import type { TProduct, TUser } from "../types/api.types";

export const USERS: Array<TUser> = [
    {
        id: 1,
        name: "David",
        surname: "Jones",
        credentials: {
            username: "david.jones@creds.com",
            passphrase: "52ccca432ab28afd90969084c061b23c",
        },
        active: true,
        created: "03.03.2025 10:00:21",
        _comment: "Пользователь David Jones с логином david.jones@creds.com и паролем '8u3&s-1uda'",
    },
    {
        id: 2,
        name: "Samantha",
        surname: "Robertson",
        credentials: {
            username: "sam.robertson@creds.com",
            passphrase: "cefdd8f05b00320c8ff42f8734f96633",
        },
        active: true,
        created: "03.03.2025 10:28:13",
        _comment: "Пользователь Samantha Robertson с логином sam.robertson@creds.com и паролем '0k91sa639'",
    },
    {
        id: 3,
        name: "Nicholas",
        surname: "Crew",
        credentials: {
            username: "nic.crew@creds.com",
            passphrase: "23c2b519b1e2cd4bbaf5f68f58024785",
        },
        active: false,
        created: "01.03.2025 12:56:28",
        _comment: "Пользователь Nicholas Crew с логином nic.crew@creds.com и паролем '1atr48asf03'",
    },
];

export const PRODUCTS: Array<TProduct> = [
    { id: 1, status: "active", date_created: "2025-03-01", name: "Кофемашина DeLonghi Magnifica" },
    { id: 2, status: "active", date_created: "2025-03-02", name: "Кофемолка Baratza Encore" },
    { id: 3, status: "inactive", date_created: "2025-03-03", name: "Кофейные зерна Colombia Supremo" },
    { id: 4, status: "active", date_created: "2025-03-04", name: "Эспрессо-машина Saeco PicoBaristo" },
    { id: 5, status: "active", date_created: "2025-03-05", name: "Кофеварка Nespresso Vertuo" },
    { id: 6, status: "inactive", date_created: "2025-03-06", name: "Френч-пресс Bodum Chambord" },
    { id: 7, status: "active", date_created: "2025-03-07", name: "Портативная кофеварка AeroPress" },
    { id: 8, status: "active", date_created: "2025-03-08", name: "Термокружка Contigo West Loop" },
    { id: 9, status: "inactive", date_created: "2025-03-09", name: "Керамическая кружка Classic" },
    { id: 10, status: "active", date_created: "2025-03-10", name: "Кофейный сервиз IKEA KORKEN" },
    { id: 11, status: "active", date_created: "2025-03-11", name: "Кофемашина Philips 3200 Series" },
    { id: 12, status: "inactive", date_created: "2025-03-12", name: "Кофемолка Hario Skerton" },
    { id: 13, status: "active", date_created: "2025-03-13", name: "Эспрессо-машина Gaggia Classic" },
    { id: 14, status: "active", date_created: "2025-03-14", name: "Кофеварка Moccamaster" },
    { id: 15, status: "inactive", date_created: "2025-03-15", name: "Френч-пресс SterlingPro" },
    { id: 16, status: "active", date_created: "2025-03-16", name: "Портативная кофемолка Porlex Mini" },
    { id: 17, status: "active", date_created: "2025-03-17", name: "Термокружка Zojirushi SM-KHE48" },
    { id: 18, status: "inactive", date_created: "2025-03-18", name: "Кофейные зерна Ethiopian Yirgacheffe" },
    { id: 19, status: "active", date_created: "2025-03-19", name: "Фильтр для кофе Hario V60" },
    { id: 20, status: "active", date_created: "2025-03-20", name: "Кофейный экстрактор Manual Brew" },
];
