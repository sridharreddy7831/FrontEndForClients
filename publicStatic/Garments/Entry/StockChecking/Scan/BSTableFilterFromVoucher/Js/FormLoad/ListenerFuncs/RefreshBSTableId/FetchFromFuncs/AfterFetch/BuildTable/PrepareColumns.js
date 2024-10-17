import { StartFunc as StartFuncColumnSalePrice } from "./TableColumns/ColumnSalePrice.js";
import { StartFunc as StartFuncColumnProductName } from "./TableColumns/ColumnProductName.js";
import { StartFunc as StartFuncColumnPk } from "./TableColumns/ColumnPk.js";
import { StartFunc as StartFuncColumnSerialNumber } from "./TableColumns/ColumnSerialNumber.js";
import { StartFunc as StartFuncColumnDateTime } from "./TableColumns/ColumnDateTime.js";

let StartFunc = () => {
    StartFuncColumnSerialNumber();
    StartFuncColumnPk();
    StartFuncColumnDateTime();
    StartFuncColumnProductName();
    StartFuncColumnSalePrice();
    
};

function operateFormatter(value, row, index) {
    return [
        '<a class="like" href="#" onclick="jFLocal1()" title="Like">',
        '<i class="fa fa-heart">Show</i>',
        '</a>  ',
        `<a class="KSMainTableRowDelete" data-pk=${row.pk} href="#" title="Remove">`,
        '<i class="fa fa-trash">Delete</i>',
        '</a>',
    ].join('')
};

function kFormatter(value, row, index) {
    return value;
};

let jFLocalSerialColumn = (value, row, index) => {
    return index + 1;
};

export { StartFunc };
