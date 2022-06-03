export class ProductClient {
    static mockImplementation(arg0: any) {
        throw new Error("Method not implemented.");
    }
    fetchItems() {
        return fetch("http://example.com/login/id+password").then((response) =>
            response.json()
        );
    }
}
