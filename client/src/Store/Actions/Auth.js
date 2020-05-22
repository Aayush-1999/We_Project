import * as actionsTypes from "./actionTypes"
import axios from "axios"

export const loginStart = ()=>{
    return{
        type:actionsTypes.LOGIN_INIT,            
    }
}

export const loginFail = (error)=>{
    return{
        type:actionsTypes.LOGIN_FAIL,
        error:error
    }
}

export const loginSuccess = (token,id)=>{
    return{
        type:actionsTypes.LOGIN_SUCCESS,
        token:token,
        userId:id
    }
}

export const register = (userData)=>{
    return(dispatch)=>{
        dispatch(loginStart())
        console.log(userData)
        var config = { headers: {
            'Content-Type': 'application/json',
            }
        }
        axios.post("/register",userData)
        .then(response=>{
            console.log(response)
            dispatch(loginSuccess(response.data.token,response.data.user._id))
            dispatch(checkAuthTime(3600))
        })
        .catch((error)=>{
            console.log(error)
            dispatch(loginFail(error))
        })
    }
}

export const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate') 
    localStorage.removeItem('userId')
    return {
        type:actionsTypes.LOGOUT
    }
}

const checkAuthTime = (expirationTime)=>{
    return(dispatch=>{
        setTimeout(()=>{
            dispatch(logout)
        },expirationTime*1000)
    })
}

export const login = (email,password)=>{
    return(dispatch)=>{
        dispatch(loginStart())
        const loginData = {
            email:email,
            password:password
        }
        console.log(loginData)
        axios.post("/login",loginData)
        .then((response)=>{
            const expirationDate =  new Date((new Date().getTime() + 3600000))
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('expirationDate',expirationDate)
            localStorage.setItem('userId',response.data.user._id)
            console.log(response)
            dispatch(loginSuccess(response.data.token,response.data.user._id))
            dispatch(checkAuthTime(3600))
        }).catch(error=>{
            dispatch(loginFail(error))
        })
    }
}

export const checkAuth=()=>{
    return dispatch=>{
        const token = localStorage.getItem('token')
        if(token){
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate > new Date()){
                const userId = localStorage.getItem('userId')
                dispatch(loginSuccess(token,userId))
                dispatch(checkAuthTime((expirationDate.getTime()-new Date().getTime())/1000))
            }
            else{
                dispatch(logout())
            }
        }
    }

}