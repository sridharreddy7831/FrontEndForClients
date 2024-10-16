import { FromNode } from "../../PullData/FetchFuncsQrCode.js";

let StartFunc = async () => {
    let jVarLocalData = await FromNode();

    localStorage.setItem("PurchaseQrCodesData", JSON.stringify(jVarLocalData));
};

export { StartFunc };