import { StartFunc as PreparePostDataStartFunc } from "../PreparePostData.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });

    try {

        let inFetchPostData = PreparePostDataStartFunc();

        let jVarLocalFetchUrl = `/bin/pos/${jVarLocalRowPK}`;

        let jVarLocalFetchHeaders = {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response;
        console.log("data:",data);

        return await data;
    } catch (error) {
        console.log("error:", error);
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };