import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/EntryFile.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/EntryFile.js";

const StartFunc = () => {
    StartFuncFormLoad();
    StartFuncAddlisteners();
};

StartFunc();

