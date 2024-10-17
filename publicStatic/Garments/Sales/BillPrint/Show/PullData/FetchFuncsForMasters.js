let StartFunc = async ({ inProjectName }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    try {
        let inFetchPostData = {
            inFolderName: "Masters",
            inFileNameOnly: "Items",
            inItemName: "ItemName",
            ScreenName: "ForDataList"
        };

        let jVarLocalFetchUrl = `/bin/Items/DataOnly`;

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

        if (data) {
            LocalReturnObject.JsonData = data;
            let localStrogeData = JSON.stringify(data);
            window.localStorage.setItem("Masters",[localStrogeData]);
        };

        LocalReturnObject.KTF = true;
    } catch (error) {
        console.log("error:", error);
    };

    return await LocalReturnObject;
};

export { StartFunc };