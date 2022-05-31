import axios from "axios";
import { showAuth } from "../StateManagement/Slices/AuthSlice";
import authHeader from "./AuthHeader";
// http://localhost:3050/
const API_URL = process.env.REACT_APP_API_HOST;

const login = ({ email, password }, setAuthenticated) => {
    axios.post(
        API_URL + "api/auth/login",
        { email: email, password: password },
        { headers: { Accept: "*/*" } })
        .then((response) => {
            if (response.data) {
                setAuthenticated(true)
                localStorage.setItem("UserRole", response.data.data[0].role)
                localStorage.setItem("AUTHTOKEN", response.data.accessToken)
                localStorage.setItem("REFRESHTOKEN", response.data.refreshToken)
            }
        }).catch((error) => {
            console.log(error);
        });
};


const logout = () => {
    localStorage.removeItem("UserRole");
    localStorage.removeItem("AUTHTOKEN");
    localStorage.removeItem("REFRESHTOKEN");
};

const status = async () => {
    try {
        return await axios.get(API_URL + "api/user", { headers: authHeader() });
    } catch (error) {
        return error
    }
};


export {
    login,
    logout,
    status
};
