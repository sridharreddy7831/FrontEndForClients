import { StartFunc as StartFuncKeyPressShow } from "./KeyPressShow/EntryFile.js";
import { StartFunc as StartFuncSaveButtonClickId } from "./SaveButtonClickId/EntryFile.js";

const StartFunc = () => {
    StartFuncKeyPressShow();
    StartFuncSaveButtonClickId();
};

export { StartFunc };

