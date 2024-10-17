import { StartFunc as FormLoadFuncsStartFunc } from "./FormLoadFuncs.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";
import { StartFunc as AddListenersStartFunc } from "./PushData/EntryFile.js";

let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let StartFunc = async () => {
    AddListenersStartFunc();

    await FormLoadFuncsStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

StartFunc().then();