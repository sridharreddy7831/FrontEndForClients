import { StartFunc as Generation } from "./Generation.js";

let StartFunc = async ({ inRowPK }) => {
    if (await Generation() === true) {

        let jVarLocalFetchUrl = `/bin/PurchaseItems/${inRowPK}`;

        let jVarLocalFetchHeaders = {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        if (response.status === 200) {
            window.location.href = ""
        }
    }

};

export { StartFunc };