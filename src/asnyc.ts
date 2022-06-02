export function fetchProduct(error?: string) {
    if (error === "error") {
        return Promise.reject("network error");
    }
    return Promise.resolve({ item: "Milk", price: 200 });
}
