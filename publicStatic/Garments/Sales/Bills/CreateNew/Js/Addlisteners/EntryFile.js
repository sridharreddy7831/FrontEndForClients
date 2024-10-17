import { StartFunc as StartFuncSaveButtonClickId } from "./SaveButtonClickId/EntryFile.js";
import { StartFunc as StartFuncKeyPressShow } from "./KeyPressShow/EntryFile.js";
import {StartFunc as StartFuncNameKeyPressShow} from "./KeyPressShowName/EntryFile.js";

const StartFunc = () => {
    StartFuncSaveButtonClickId();
    StartFuncKeyPressShow();
    StartFuncNameKeyPressShow();
};

export { StartFunc };