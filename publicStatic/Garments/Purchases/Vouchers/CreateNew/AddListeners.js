import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";

let StartFunc = () => {
    let jVarLocalCreateNewButtonId = document.getElementById("CreateNewButtonId");

    jVarLocalCreateNewButtonId.addEventListener("click", async () => {
        let LocalFromSave = await PushDataStartFunc();

        await LocalAfterSaveFunc({ inFetchPostData: LocalFromSave });
    });
};


let LocalAfterSaveFunc = ({ inFetchPostData }) => {
    if (inFetchPostData.KTF) {
        let RowPk = inFetchPostData.pk;

        window.location = `../../Vouchers/ShowQrCodes/ShowQrCodes.html?RowPK=${RowPk}`;
    };
};

export { StartFunc };