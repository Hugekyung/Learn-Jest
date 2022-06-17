import { StubProductClient } from "./test/stub_product_client";

interface Item {
    item: string;
    available: boolean;
}

export class ProductService {
    productClient: StubProductClient;
    constructor(productClient: StubProductClient) {
        this.productClient = productClient;
    }

    async fetchAvailableItems() {
        const items: Item[] = await this.productClient.fetchItems();
        const result = items.filter((item: Item) => item.available);
        return result;
    }
}
