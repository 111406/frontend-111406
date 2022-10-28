import axios from "axios";
import jwt_decode from 'jwt-decode'
const TOKEN_NAME = "token";
var token1='';
const userRequest = axios.create({
    baseURL: 'https://backend-111406.onrender.com',
    headers: { 'Content-Type': 'application/json' },
  })

export const login = (user_id, password) => {
    return userRequest.post("/api/user/login",
    JSON.stringify({
        user_id,
        password,})
        ).then((res) =>{ 
            const token = res.headers.token
            console.log(token);
            localStorage.setItem('jwToken',token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            return token;
    }).catch((err)=>err.toString());
  };
  export const setAuthToken = (token) => {
    localStorage.setItem(TOKEN_NAME, token);
  };
  
  // 從 localStorage 讀取 token
  export const getAuthToken = () => {
    return localStorage.getItem(TOKEN_NAME);
  };