class StubUserClient {
    async login(id: string, password: string) {
        return JSON.stringify({ userId: "haechan", password: "123456789" });
    }
}

export default StubUserClient;
