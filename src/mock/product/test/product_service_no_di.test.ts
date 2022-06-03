import { ProductService } from "../product_service_no_di.js";
import { ProductClient } from "../product_client.js";
jest.mock("../product_client");

describe("Test ProductService", () => {
    const fetchItems = jest.fn(async () => [
        { item: "Milk", available: true },
        { item: "Banana", available: false },
    ]);
    let productService;
    beforeEach(() => {
        productService = new ProductService();
    });

    it("Test fetchAvailableItems", () => {});
});
