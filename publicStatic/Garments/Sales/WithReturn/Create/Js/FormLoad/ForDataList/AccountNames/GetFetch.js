let StartFunc = async () => {
    // let jVarLocalFetchUrl = `/bin/Accounts/DataOnly`;
    // let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();
    // localStorage.setItem("AccountNames", JSON.stringify(data));
    // jFLocalToDataList();
};

let jFLocalToDataList = () => {
    let jVarLocalArray = localStorage.getItem("AccountNames");
    let jVarLocalArrayJson = JSON.parse(jVarLocalArray);
    let str = "";

    for (var i = 0; i < jVarLocalArrayJson.length; ++i) {
        str += '<option value="' + jVarLocalArrayJson[i].AccountName + '" />'; // Storing options in variable
    };

    let jVarLocalAccountNamesDataListId = document.getElementById("AccountNamesDataListId");
    jVarLocalAccountNamesDataListId.innerHTML = str;

};

export { StartFunc };