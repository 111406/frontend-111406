const TOKEN_NAME = "token";
const SEARCH_NAME = "admin";
const COM_COM=[];


  export const setAuthToken = (token) => {
    localStorage.setItem(TOKEN_NAME, token);
  };
  
  // 從 localStorage 讀取 token
  export const getAuthToken = () => {
    return localStorage.getItem(TOKEN_NAME);
  };
  export const setAuthSearchName = (search) => {
    localStorage.setItem(SEARCH_NAME, search);
  };
  
  // 從 localStorage 讀取 token
  export const getAuthSearchName = () => {
    return localStorage.getItem(SEARCH_NAME);
  };
  export const setCom = (com) => {
    localStorage.setItem(COM_COM, com);
  };
  
  // 從 localStorage 讀取 token
  export const getCom = () => {
    return localStorage.getItem(COM_COM);
  };