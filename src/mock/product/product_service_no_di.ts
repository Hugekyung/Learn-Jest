import { ProductClient } from "./product_client";

interface Item {
    item: string;
    available: boolean;
}

export class ProductService {
    productClient: ProductClient;
    constructor() {
        this.productClient = new ProductClient();
    }

    async fetchAvailableItems() {
        const items: Item[] = await this.productClient.fetchItems();
        const result = items.filter((item: Item) => item.available);
        return result;
    }
}
