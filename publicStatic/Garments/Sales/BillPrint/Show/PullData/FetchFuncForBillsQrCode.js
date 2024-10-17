let FromNode = async ({ inFolderName, inFileName, inItemName, inRowPK, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let localItemName = "BillsQrCode";

        let fetchBodyObj = {
            inFolderName: inFolderName,
            inFileNameOnly: inFileName,
            inItemName: "BillsQrCode",
            inColumnName: "BillPk",
            inValueToCheck: { "BillPk": inRowPK }
        };

        // let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK`;
        let jVarLocalFetchUrl = `/bin/BillsQrCode/FilterData/BillPk/${inRowPK}`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fetchBodyObj)
        };

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        // if (data.KTF === false) {
        //     LocalReturnObject.KReason = data.KReason;
        //     return await LocalReturnObject;
        // };

        LocalReturnObject.JsonData = data;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };