import axios from "axios";
import setAuthToken from "./authToken";
import jwt_decode from 'jwt-decode'
const userRequest = axios.create({
    baseURL: 'https://backend-111406.herokuapp.com/',
    headers: { 'Content-Type': 'application/json' },
  })

export const login = (user_id, password) => {
    return userRequest.post("/api/user/login",
    JSON.stringify({
        user_id,
        password,})
        ).then((res) =>{ 
            const {token} = res.data;
            localStorage.setItem('jwToken',token)
            setAuthToken(token)
            const decoded = jwt_decode(token)
    }).catch((err)=>err.toString());
  };