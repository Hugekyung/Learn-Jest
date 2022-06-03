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

    fetchAvailableItems() {
        return this.productClient
            .fetchItems()
            .then((items) => items.filter((item: Item) => item.available));
    }
}
