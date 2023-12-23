import request from "../request"
interface LoginTypeProps {
    user_name: string;
    password: string;
}
interface RegisterTypeProps {
    user_name: string;
    password: string;
    email: string;
    phone_number: string;
    name: string;
}
const login = (body: LoginTypeProps) => request.post("/login", body)
const register = (body: RegisterTypeProps) => request.post("/register", body)

export { login,register }

