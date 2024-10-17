import { StartFunc as StartFuncCheckLogin } from "./Check/CheckLogin.js";
import { StartFunc as StartFuncLoginFetch } from "./LoginFetch/LoginFetch.js";

const StartFunc = () => {
    StartFuncCheckLogin();
    StartFuncLoginFetch();
};


StartFunc();