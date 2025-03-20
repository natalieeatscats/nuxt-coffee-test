import type { Request, Response } from "express";
import express from "express";
import cors from "cors";
import { PRODUCTS, USERS } from "./mocks";
import type { TUser } from "../types/api.types";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Эндпоинт для получения пользователей
app.get("/users", (req: Request, res: Response) => {
    const username = req.query["credentials.username"];

    if (username && typeof username === "string") {
        const filtered: Array<TUser> = USERS.filter(user => user.credentials.username === username);
        res.json(filtered);
        return;
    }

    res.json(USERS);
});

// Эндпоинт для получения товаров
app.get("/products", (req: Request, res: Response) => {
    res.json(PRODUCTS);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Express сервер запущен на http://localhost:${PORT}`);
});
