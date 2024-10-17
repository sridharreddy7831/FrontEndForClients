const StartFunc = () => {
    let jVarLocalInventoryData = localStorage.getItem("GstData");
    let jVarLocalInventoryDataAsJson = JSON.parse(jVarLocalInventoryData);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForGridFooter");
    let k3 = document.getElementById("TemplateForTerms");

    // k1.innerHTML += k2.innerHTML;
    // k1.innerHTML += k2.innerHTML;
    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `<span style="font-size: 13px;">GST%  BasicRate  CGST%  CGST    SGST%    SGST</span>\n`
    k1.innerHTML += `----------------------------------------------\n`
    jVarLocalInventoryDataAsJson.forEach(element => {
        let jVarLoopInsideGST = `${element.GST}%`;
        let jVarLoopInsideGstAmount = `${element.GstAmount}`;
        let jVarLoopInsideCGSTKey = `${element.CGSTKey}%`;
        let jVarLoopInsideCGSTValue = `${element.CGSTValue}`;
        let jVarLoopInsideSGSTKey = `${element.SGSTKey}%`;
        let jVarLoopInsideSGSTValue = `${element.SGSTValue}`;

        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGST.toString().padEnd(4, " ")}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGstAmount.toString().padStart(8, " ")}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideCGSTKey.toString().padStart(9, " ")}</span>`;
        // k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideCGSTKey.padStart(9)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideCGSTValue.padStart(7)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideSGSTKey.padStart(9)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideSGSTValue.padStart(8)}</span>\n`;
    });

    let jVarLocalGST = jVarLocalInventoryDataAsJson.map((element) => {
        return element.GstAmount;
    });
    let jVarLocalCGSTValue = jVarLocalInventoryDataAsJson.map((element) => {
        return parseFloat(element.CGSTValue);
    });
    let jVarLocalSGSTValue = jVarLocalInventoryDataAsJson.map((element) => {
        return parseFloat(element.SGSTValue);
    });
    let jvarLocalGstTaxaBleAmount = jVarLocalGST.reduce((a, b) => a + b, 0).toFixed(2);
    let jvarLocalTotalCGSTValue = jVarLocalCGSTValue.reduce((a, b) => a + b, 0).toFixed(2);
    let jvarLocalTotalSGSTValue = jVarLocalSGSTValue.reduce((a, b) => a + b, 0).toFixed(2);

    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `<span style="font-size: 13px;">Total:  ${jvarLocalGstTaxaBleAmount.padStart(5)}</span>`;
    k1.innerHTML += `<span style="font-size: 13px;">${jvarLocalTotalCGSTValue.padStart(13)}</span>`;
    k1.innerHTML += `<span style="font-size: 13px;">${jvarLocalTotalSGSTValue.padStart(17)}</span>\n`;
    k1.innerHTML += `----------------------------------------------\n`

    k1.innerHTML +=
        `<span style="font-size: 16px;">* Terms And Conditions *
Exchange Time Between 1-4PM,
Goods Will Be Exchanged WithIn 7Days 
of Purchase Date,No Colour Guarantee
Thank you for your visit        
Have a nice day</span> `;
};


export { StartFunc };