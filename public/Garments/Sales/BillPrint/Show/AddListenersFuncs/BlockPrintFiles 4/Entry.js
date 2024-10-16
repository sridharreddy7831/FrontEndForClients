import { StartFunc as StartFuncHeader } from "./Header.js";
import { StartFunc as StartFuncTableRow } from "./TableRow.js";
import { StartFunc as StartFuncFooter } from "./Footer.js";

let StartFunc = () => {
    StartFuncHeader();
    StartFuncTableRow();
    StartFuncFooter();

    printJS("PrintDiv", "html");
};
export { StartFunc };