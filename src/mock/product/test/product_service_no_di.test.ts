import { ProductService } from "../product_service_no_di";
import { ProductClient } from "../product_client";
jest.mock("../product_client");

describe("Test ProductService", () => {
    // const fetchItems = jest.fn(async () => [
    //     { item: "Milk", available: true },
    //     { item: "Banana", available: false },
    // ]);

    const fetchItems = jest.fn().mockResolvedValue([
        { item: "Milk", available: true },
        { item: "Banana", available: false },
    ]);

    // ? mockImplementation 이거 해결방법?
    ProductClient.mockImplementation(() => {
        return {
            fetchItems,
        };
    });
    let productService: ProductService;
    beforeEach(() => {
        productService = new ProductService();
    });

    // ! TypeError: Cannot read properties of undefined (reading 'then')
    it("should filter out only available items", async () => {
        const items = await productService.fetchAvailableItems();
        console.log(items);
        expect(items.length).toBe(1);
        expect(fetchItems).toHaveBeenCalledTimes(1);
        // expect(items).toEqual([{ item: "Milk", available: true }]);
    });
});
