let StartFunc = () => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "pk";
    jVarLocalNewTh.dataset.field = "pk";
    jVarLocalNewTh.setAttribute("data-width", "100");
    jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
};

export { StartFunc };