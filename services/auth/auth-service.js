// Utils
import ApiClient from "../../utils/api-client";


class AuthService extends ApiClient {
    
    signIn (payload) {
        const path = `${apiUrl}auth/login`
        return this.post(path, payload)
    }

}
const authService = new AuthService()

export default authService