let StartFunc = async () => {
    try {
        let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });
        let jVarLocalFetchUrl = `/bin/PurchaseItems/FilterData/FK/${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);

        if (response.status === 200) {
            const data = await response.json();
            return await data;
        }else{
            return await [];  
        }


    } catch (error) {
        console.log("error:", error);
    }

};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };