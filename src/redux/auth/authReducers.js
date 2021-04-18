import { loadFromLocalStorage, removeFromLocalStorage } from "../../services/storageService"
import { LOGIN_FAILED, LOGIN_START, SET_LOGIN, SET_LOGOUT } from "./authTypes"

const initialState = {
    isLoggedIn : false,
    personalDetails : {} ,
    token : '', 
    error : '',
    isLoading : false,
}

const authReducer = (state = initialState , action = {} ) => {
    switch(action.type){
        case SET_LOGIN : {
           return {
               ...state , isLoggedIn : true ,personalDetails : action.userData.personalDetails , token: action.userData.token , error : '',  isLoading : false
           } 
        }
        case LOGIN_FAILED : {
            return {
                ...state ,isLoggedIn : false , error : action.error , isLoading : false
            }
        }
        case LOGIN_START : {
            return {
                ...state ,isLoggedIn : false , error : '' ,isLoading : true
            }
        }
        case SET_LOGOUT : {
            removeFromLocalStorage('userData')
            return {
                ...state, isLoggedIn : false , error : '', token : '', isLoading : false , personalDetails : {} 
            }
        }
        
        default : {
            const userData = loadFromLocalStorage('userData')
            if(userData)
                return {
                    ...state , isLoggedIn : true ,personalDetails : userData.personalDetails , token: userData.token , error : '',  isLoading : false
                }
            return state
        }
    }
}

export default authReducer ;