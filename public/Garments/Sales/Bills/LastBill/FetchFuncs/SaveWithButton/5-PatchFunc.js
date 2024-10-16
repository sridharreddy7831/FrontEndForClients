import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";


const StartFunc = async ({ inFetchBody }) => {
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

    StartFuncAfterFetchFunc({ inResponse: response });

};

export { StartFunc };