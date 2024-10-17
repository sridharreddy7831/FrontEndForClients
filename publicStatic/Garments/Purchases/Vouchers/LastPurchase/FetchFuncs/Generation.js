let StartFunc = async () => {
    let jVarLocalRowPK = localStorage.getItem("RowPK");
    try {
        let jVarLocalFetchUrl = `/bin/Generate/FilterData/PurchasePk/${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);
        if (response.status === 500) {
            return true
        };
    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };