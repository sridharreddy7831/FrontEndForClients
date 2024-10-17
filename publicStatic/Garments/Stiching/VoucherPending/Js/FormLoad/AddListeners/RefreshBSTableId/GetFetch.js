let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/StichingPOS/DataOnly`;
    const response = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromResponse = await response.json();
    //console.log("jVarLocalFromResponse : ", jVarLocalFromResponse);
    return jVarLocalFromResponse;
};

export { StartFunc };
