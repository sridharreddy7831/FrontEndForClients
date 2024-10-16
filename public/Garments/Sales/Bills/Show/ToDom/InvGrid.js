import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";

let StartFunc = async ({ inDataAsArray }) => {
    let jVarLocalSortTableDataAsJson = inDataAsArray.sort((a, b) => a.sno - b.sno);
    await ShowOnDomTableBody({ inDataAsArray: jVarLocalSortTableDataAsJson });
};

let ShowOnDomTableBody = async ({ inDataAsArray }) => {
    let jVarLocalTableBodyId = document.getElementById("InvTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        jVarLocalTableBodyId.innerHTML = "";
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

        inDataAsArray.forEach(element => {
            let jVarLocalToShowHtml = template(element);

            jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
        });

    };
};

export { StartFunc };