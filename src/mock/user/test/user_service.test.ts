import UserService from "../user_service";
import StubUserClient from "./stub_user_client";

describe("UserService TEST", () => {
    let userClient: StubUserClient;
    beforeEach(() => {
        userClient = new StubUserClient();
    });

    it("id와 password를 받아 로그인 처리한다.", async () => {
        const id = "haechan";
        const password = "123456789";
        const userService = new UserService(userClient);
        const res = await userService.login(id, password);
        expect(res).toBeTruthy();
    });
});
