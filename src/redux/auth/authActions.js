import { LOGIN_API } from "../../constants/api/api"
import fetchData from "../../services/fetchData"
import { saveToLocalStorage } from "../../services/storageService";
import { LOGIN_FAILED, LOGIN_START, SET_LOGIN, SET_LOGOUT } from "./authTypes";

export const setLogin = (email , password , rememberMe) => {

    return async dispatch => {
        dispatch({type : LOGIN_START})
        const options = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
        const response = await fetchData(LOGIN_API, options)
        const data = response[0];

            if (data) {
                dispatch({type : SET_LOGIN ,userData : data})
                if (rememberMe)
                    saveToLocalStorage('userData', data)
            }
            else 
                dispatch({type : LOGIN_FAILED , error : 'Login has been failed!'})
    }
}
export const setLogout = () => ({
    type : SET_LOGOUT
});