import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBSTables } from "./BuildBSTables/EntryFile.js";

const StartFunc = () => {
    StartFuncBuildBSTables();
    StartFuncAddListeners();
};

export { StartFunc };
