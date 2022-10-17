import axios from "axios";
import setAuthToken from "./authToken";
import jwt_decode from 'jwt-decode'
const userRequest = axios.create({
    baseURL: 'https://web-backend-111406.onrender.com/',
    headers: { 'Content-Type': 'application/json' },
  })

export const login = (user_id, password) => {
    return userRequest.post("/api/user/login",
    JSON.stringify({
        user_id,
        password,})
        ).then((res) =>{ 
            console.log(res.headers.get('token'))
            console.log(res.data)
            const {token} = res.data;
            localStorage.setItem('jwToken',token)
            setAuthToken(token)
            const decoded = jwt_decode(token)
    }).catch((err)=>err.toString());
  };