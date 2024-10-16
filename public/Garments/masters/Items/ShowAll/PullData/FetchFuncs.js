let FromNode = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

//        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK`;
        let jVarLocalFetchUrl = `/bin/Items/DataOnly`;

        let inFetchPostData = {
            inFolderName,
            inFileNameOnly: inFileName,
            inItemName,
            inScreenName: "Create"
        };

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        LocalReturnObject.JsonData = data;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };