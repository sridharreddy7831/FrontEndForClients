let StartFunc = async () => {

    let jVarLocalFetchUrl = `/bin/DeliveryStiching/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    let Text = await response.json();

    return Text;
};

export { StartFunc };