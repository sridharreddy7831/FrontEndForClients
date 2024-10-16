import { FromNode } from "../PullData/FetchFuncs.js";
import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";

let StartFunc = async () => {
    let jVarLocalData = await FromNode();

    if (jVarLocalData.KTF) {
        await ShowOnDom({ inData: jVarLocalData.JsonData });
    };
};

let ShowOnDom = async ({ inData }) => {
    await ShowOnDomTableBody({ inData });
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("TableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

        inData.forEach(element => {

            let jVarLocalToShowHtml = template(element);

            jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
        });

    };
};

export { StartFunc };