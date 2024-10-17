
let StartFunc = (index, row, $detail) => {
    console.log("KKKK",row);

    let jVarLocalDataArray = row.AggValues.QrCodeDetails;
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForQrCodes");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");
    const s = new XMLSerializer();
    const str = s.serializeToString(clone);
    
    let jVarLocalInsideTable = $detail.html(str).find('table');

    jVarLocalInsideTable.bootstrapTable({
        data: jVarLocalDataArray
    })

};

let jFLocalTableColumns = () => {
    [{
        "field": "ItemSerial",
        "title": "ItemSerial"
    },
    {
        "field": "Category",
        "title": "Category"
    },
    {
        "field": "ItemName",
        "title": "ItemName"
    },
    {
        "field": "Rate",
        "title": "Rate"
    },
    {
        "field": "Pcs",
        "title": "Pcs"
    },
    {
        "field": "location",
        "title": "location"
    },
    {
        "field": "DeliveryDateTime",
        "title": "DeliveryDateTime"
    }]
};

export { StartFunc };