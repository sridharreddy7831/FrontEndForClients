import { ReturnRowPK } from "../../urlSearchParams.js";
let localRowPK = ReturnRowPK().RowPK;

let StartFunc = ({ inResponse }) => {
    if (inResponse.status === 200) {
        window.location.href = `?FromSave=true`;
    } else {
        Swal.fire("Check and scan");
    };
};

export { StartFunc };