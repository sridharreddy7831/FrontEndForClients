let FromNode = async () => {
    let LocalRowPk = ReturnRowPK();
    try {
        let jVarLocalFetchUrl = `/bin/pos/${LocalRowPk}`;
        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        return await data;

    } catch (error) {
        console.log("error:", error);
    }

};

let ReturnRowPK = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const RowPK = params.get("RowPK");

    return RowPK;
};

export { FromNode };