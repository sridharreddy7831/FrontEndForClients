import { StartFunc as StartFuncCheckLogin } from "../../Check/CheckLogin.js";

let StartFunc = () => {
    console.log("jjjjjjjjjj");
    LocalDeleteCookie({ inTokenName: "KToken" })
    StartFuncCheckLogin();

};
let LocalDeleteCookie = ({ inTokenName }) => {
    document.cookie = `${inTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

export { StartFunc };