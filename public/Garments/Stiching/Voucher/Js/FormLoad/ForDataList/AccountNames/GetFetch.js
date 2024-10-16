let StartFunc = async () => {
    // let jVarLocalFetchUrl = `/bin/Accounts/DataOnly`;
    // let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();
    // localStorage.setItem("AccountNames", JSON.stringify(data));
    jFShowDateTime();
};

const jFShowDateTime = () => {
    var sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate());

    var formattedSevenDaysAgo = sevenDaysAgo.getFullYear() + '-' + ((sevenDaysAgo.getMonth() + 1) < 10 ? '0' : '') + (sevenDaysAgo.getMonth() + 1) + '-' + (sevenDaysAgo.getDate() < 10 ? '0' : '') + sevenDaysAgo.getDate();

    document.getElementById('Date').value = formattedSevenDaysAgo;
};

export { StartFunc };