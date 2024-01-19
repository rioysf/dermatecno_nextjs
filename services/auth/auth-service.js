// Utils
import ApiClient from "../../utils/api-client";


class AuthService extends ApiClient {
    
    signIn (payload) {
        const path = `http://127.0.0.1:8069/api/v1/login`
        return this.post(path, payload)
    }

}
const authService = new AuthService()

export default authService