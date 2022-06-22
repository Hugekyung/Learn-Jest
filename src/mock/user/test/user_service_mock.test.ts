import UserService from "../user_service";
import UserClient from "../user_client";
jest.mock("../user_client");
const MockedUserClient = UserClient as jest.Mock<UserClient>;

describe("UserService", () => {
    const login = jest.fn(async () => {
        return { message: "success" };
    });
    MockedUserClient.mockImplementation(() => {
        return {
            login,
        };
    });
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService(new MockedUserClient());
    });

    it("로그인을 시도하면 login() 함수를 호출한다.", async () => {
        await userService.login("test", "test");
        expect(login).toHaveBeenCalledTimes(1);
    });

    it("이미 로그인이 되어있다면 로그인을 재시도할 수 없다.", async () => {
        await userService.login("test", "test");
        await userService.login("test", "test");
        expect(login).toHaveBeenCalledTimes(1);
    });
});
