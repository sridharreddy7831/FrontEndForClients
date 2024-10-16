let FromNode = async ({ inFolderName, inFileName, inItemName, inRowPK, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let jVarLocalFetchUrl = `/bin/Generate/FilterData/pk/${inRowPK}`;
        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        LocalReturnObject.JsonData = data[0];
        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };