// * 외부 의존성을 처리하기 위한 함수
export class StubProductClient {
    async fetchItems() {
        return [
            { item: "Milk", available: true },
            { item: "Banana", available: false },
        ];
    }
}
