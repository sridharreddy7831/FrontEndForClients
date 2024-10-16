import { StartFunc as StartFuncQrKeyPress } from "./QrKeyPress/EntryFile.js";
import { StartFunc as StartFuncSaveButtonClickId } from "./SaveButtonClickId/EntryFile.js";

const StartFunc = () => {
    StartFuncQrKeyPress();
    StartFuncSaveButtonClickId();
};

export { StartFunc };

