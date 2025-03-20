import axios from "axios";
import type { TProduct } from "~/types/api.types";

export function useData() {
    const { baseUrl } = useRuntimeConfig().public;
    const products = useState<Array<TProduct>>("products", () => []);

    async function fetchProducts(): Promise<void> {
        try {
            const response = await axios.get(`${baseUrl}/products`);
            products.value = response.data;
        } catch (error) {
            console.error("Ошибка при получении данных товаров:", error);
        }
    }

    return { products, fetchProducts };
}
