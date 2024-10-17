let StartFunc = (inFromFetch) => {
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();

    // var $table = $('#table');

    // $table.bootstrapTable("refresh");
};

export { StartFunc }