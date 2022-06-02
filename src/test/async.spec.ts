import { fetchProduct } from "../asnyc";

describe("Test for fetchProduct", () => {
    // it("should be return error message", async () => {
    //     const error = "error";
    //     const result = await fetchProduct(error);
    //     expect(result).toThrow("network error");
    // });

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
});
