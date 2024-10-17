import { ReturnRowPK } from "../../urlSearchParams.js";
let localRowPK = ReturnRowPK().RowPK;

let StartFunc = ({ inResponse }) => {
    if (inResponse.KTF) {
        window.location.href = `?RowPK=${localRowPK}&FromSave=true`;
    } else {
        Swal.fire(inResponse.KReason);
    };
};

export { StartFunc };