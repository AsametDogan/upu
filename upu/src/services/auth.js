import { instance } from "../libs/client"
class AuthService {

    async GetUsers() {
        return instance.get("controller");
    }
    async SignUp(data) {
        return instance.post("auth/signup",
            data
        );
    }
    async FindMe(id) {
        return instance.post("user/findme",
            { id }
        );
    }
    async SignIn(data) {
        return instance.post("auth/signin", data)
    }

};
const authService = new AuthService();
export { authService };