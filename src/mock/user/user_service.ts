import UserClient from "./user_client";

class UserService {
    userClient: UserClient;
    isLogedIn: boolean;
    constructor(userClient: UserClient) {
        this.userClient = userClient;
        this.isLogedIn = false;
    }

    login(id: string, password: string) {
        if (!this.isLogedIn) {
            //return fetch('http://example.com/login/id+password') //
            // .then((response) => response.json());
            return this.userClient
                .login(id, password) //
                .then((data) => (this.isLogedIn = true));
        }
    }
}

export default UserService;
