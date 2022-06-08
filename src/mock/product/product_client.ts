interface Item {
    item: string;
    available: boolean;
}

export class ProductClient {
    static mockImplementation(arg0: any) {
        throw new Error("Method not implemented.");
    }

    fetchItems() {
        const items: Item[] = [];
        fetch("http://example.com/login/id+password").then(async (response) =>
            items.push(await response.json())
        );

        return items;
    }
}
