import { ProductClient } from "./product_client";

export class ProductService {
    productClient: ProductClient;
    constructor() {
        this.productClient = new ProductClient();
    }

    fetchAvailableItems() {
        return this.productClient
            .fetchItems()
            .then((items) =>
                items.filter((item: string) => item === "available")
            );
    }
}
