import axios from "axios";
import { allParticipants } from "../mocks/participants";
// import authHeader from "./authHeader";
// import authServices from "./authServices";
import authHeader from "./AuthHeader";
import { logout } from "./AuthServices";

const API_URL = process.env.REACT_APP_API_HOST;

const getAllUsersInfo = () => {
    try {
        return axios.get(API_URL + "api/user/participantsAllData", { headers: authHeader() });
    } catch (error) {
        // if (error.response.status === 401) {
        //     logout();
        // }
    }
};

const getUserInfo = async (id) => {
    try {
        return await axios.get(API_URL + `api/user/participantsAllData/${id}`, { headers: authHeader() });
    } catch (error) {
        if (error.response.status === 401) {
            logout();
        }
    }
};

const getAllCities = () => {
    return ["MDE", "CLO", "BOG"]
}
const getUserByID = (id) => {
    try {
        // return axios.get(API_URL + "personal/" + id, { headers: authHeader() });
    } catch (error) { }
};

export {
    getAllUsersInfo,
    getUserByID,
    getAllCities,
    getUserInfo
};