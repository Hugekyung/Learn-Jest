import { ProductService } from "../product_service";
import { StubProductClient } from "./stub_product_client";

describe("ProductService - Stub", () => {
    let productService: ProductService;

    beforeEach(() => {
        return (productService = new ProductService(new StubProductClient())); // * 의존성 생성 후 주입
    });

    it("should filter out only available items", async () => {
        const items = await productService.fetchAvailableItems();
        expect(items.length).toBe(1);
        expect(items).toEqual([{ item: "Milk", available: true }]);
    });
});
