import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/EntryFile.js";

const StartFunc = () => {
    StartFuncFormLoad();
    StartFuncButtonClickFunc();
};

StartFunc();

