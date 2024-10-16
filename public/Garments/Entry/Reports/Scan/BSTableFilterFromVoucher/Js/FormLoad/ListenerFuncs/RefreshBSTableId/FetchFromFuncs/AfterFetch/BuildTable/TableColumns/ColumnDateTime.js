let StartFunc = () => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "DateTime";
    jVarLocalNewTh.dataset.field = "DateTime";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
};

export { StartFunc };