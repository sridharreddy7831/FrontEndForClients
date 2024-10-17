let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    console.log("jVarLocalBodyData::",jVarLocalBodyData);
    let jVarLocalFetchUrl = `/bin/DeliveryStiching/MultiInsertWithCheck`;

    let jVarLocalFetchHeaderObject = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    console.log("response::",response);
    return response;
};

export { StartFunc };