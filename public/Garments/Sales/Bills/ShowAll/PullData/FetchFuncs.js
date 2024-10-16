let FromNode = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        // let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK`;
        let jVarLocalFetchUrl = "/bin/pos/Filter";

        let inFetchPostData = {
            FilterCondition: "e.Date >='2024-04-01' && e.Date <='2025-03-31'"
        };

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();
        return await data;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };