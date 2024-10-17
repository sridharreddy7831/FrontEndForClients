import { StartFunc as StartFuncDisPersantage } from "./invKeyPressCal/DisPersantage.js";
import { StartFunc as StartFuncDisRate } from "./invKeyPressCal/DisRate.js";
import { StartFunc as StartFuncGrossAmout } from "./invKeyPressCal/GrossAmout.js";
import { StartFunc as StartFuncQty } from "./invKeyPressCal/Qty.js";

let StartFunc = () => {
    StartFuncDisPersantage();
    StartFuncDisRate();
    StartFuncGrossAmout();
    StartFuncQty();
};


export { StartFunc };