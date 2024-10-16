let StartFunc = async () => {
    let LocalUrl = `/bin/Items/DataOnly`
    let localfetch = await fetch(LocalUrl);
    let data = await localfetch.json();
    let jVarLocalDataListId = document.getElementById("suggesteditems");

    data.forEach(element => {
        let jVarLocalOptions = document.createElement("option");
        jVarLocalOptions.value = element.ItemName;
        jVarLocalOptions.innerHTML = element.ItemName;
        jVarLocalDataListId.appendChild(jVarLocalOptions);
    });
};

export { StartFunc };