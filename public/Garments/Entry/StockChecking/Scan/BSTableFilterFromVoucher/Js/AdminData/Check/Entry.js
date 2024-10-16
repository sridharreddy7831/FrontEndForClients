import { StartFunc as StartFuncCookie } from "./Cookie/Cookie.js";
import { StartFunc as StartFuncHeader } from "./Cookie/Header.js";
import { StartFunc as StartFuncDeleteCookie } from "./Cookie/DeleteCookie.js";

const StartFunc = () => {

    let jVarLocalCookieValue = StartFuncCookie();

    if (jVarLocalCookieValue === null) {
        StartFuncDeleteCookie();

        return false;
    } else {
        StartFuncHeader();

        return true;
    };
};







export { StartFunc };