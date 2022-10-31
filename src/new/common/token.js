import { getAuthToken } from "./apiUtil";
const token=getAuthToken();
// console.log("tk:"+token);
export const Token =`${token}`;