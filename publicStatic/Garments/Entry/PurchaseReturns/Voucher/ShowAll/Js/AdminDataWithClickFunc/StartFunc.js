import { StartFunc as StartFuncInputFocus } from "./InputFocus/Show.js";
import { StartFunc as StartFuncCheckLogin } from "./Check/CheckLogin.js";
import { StartFunc as StartFuncEntry } from "./Addlisteners/Entry.js";

let StartFunc = () => {

    StartFuncInputFocus();
    StartFuncCheckLogin();
    StartFuncEntry()
};
StartFunc();
