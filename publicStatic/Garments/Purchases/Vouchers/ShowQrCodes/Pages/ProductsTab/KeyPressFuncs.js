import { StartFunc as StartFuncValueAdditionId } from "./KeyPressFuncs/ValueAdditionId.js";
import { StartFunc as StartFuncMRPId } from "./KeyPressFuncs/MRPId.js";

let StartFunc = () => {
    StartFuncValueAdditionId();
    StartFuncMRPId();
};

export { StartFunc }