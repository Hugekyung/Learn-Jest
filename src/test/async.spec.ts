import { fetchProduct } from "../asnyc";

describe("Test for fetchProduct", () => {
    // * done 방식은 코드가 지저분해지고, 수행 속도도 느려 권장하지 않음
    it("should be return item - done", (done) => {
        fetchProduct().then((item) => {
            expect(item).toEqual({ item: "Milk", price: 200 });
            done();
        });
    });

    it("should be return item - promise return", () => {
        return fetchProduct().then((item) => {
            expect(item).toEqual({ item: "Milk", price: 200 });
        });
    });

    it("should be return item - async / await", async () => {
        const product = await fetchProduct();
        expect(product).toEqual({ item: "Milk", price: 200 });
    });

    it("async - resolves", () => {
        return expect(fetchProduct()).resolves.toEqual({
            item: "Milk",
            price: 200,
        });
    });

    it("async - rejects", () => {
        const error = "error";
        return expect(fetchProduct(error)).rejects.toBe("network error");
    });
});
