import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";

const StartFunc = async ({ inFetchBody }) => {
    // let jFetchUrl = `/bin/BillsQrCode/WithKeysCheck`;
    let jFetchUrl = `/Custom/Clients/Maguva/Transactions/Sales/QrCodes`;

    let jLocalFetchConfig = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    };

    let response = await fetch(jFetchUrl, jLocalFetchConfig);

    if (response.status === 200) {
        let jVarLocalResponseData = await response.json();

        StartFuncAfterFetchFunc({ inResponse: jVarLocalResponseData });
    } else {
        Swal.fire({
            title: "Ckeck and scan",
            confirmButtonText: "ok",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = ""
            }
        });
    };


};

export { StartFunc };