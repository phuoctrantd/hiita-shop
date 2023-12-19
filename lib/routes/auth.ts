import request from "../request"
interface LoginTypeProps {
    user_name: string;
    password: string;
}
const login = (body: LoginTypeProps) => request.post("/login", body)

export { login }

