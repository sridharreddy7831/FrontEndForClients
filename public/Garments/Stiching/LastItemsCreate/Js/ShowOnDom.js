let StartFunc = async () => {
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();

    let jVarLocaProductName = 'ProductName';
    let jVarLocalProductName = document.getElementById(jVarLocaProductName);
    jVarLocalProductName.focus();
   
};

export { StartFunc }