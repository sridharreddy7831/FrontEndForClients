let StartFunc = () => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "#";
    jVarLocalNewTh.setAttribute("data-formatter", "jFLocalSerialColumn");
    jVarLocalNewTh.setAttribute("data-width", "50");
    jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
};
function jFLocalSerialColumn(value, row, index){
    return index + 1;
};

export { StartFunc };