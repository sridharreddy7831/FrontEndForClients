let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Items/DataOnly`;

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };