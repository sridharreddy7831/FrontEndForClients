const StartFunc = ({ InData }) => {
    let LocalInData = InData;
    let k1 = document.getElementById("PrintDiv");

    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += ` <span style="font-size: 13px;">#   ItemName           Rate           AddOn</span>\n`
    // k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `     <span style="font-size: 13px;">Discount                          G-Rate</span>\n`
    k1.innerHTML += `---------------------------------------------\n`
    LocalInData.forEach((element, index) => {
        let LocalSerialNo = index + 1;
        let jVarLoopInsideItem = `${element.ProductName}`;
        // let jVarLoopInsideRate = `${element.UnitRate}`;
        // let jVarLoopInsideDisPercentage = `${element.DisPercentage}%-${element.deliveryItemDisAmount}`;
        let jVarLoopInsideDisPercentage = `${element.deliveryItemDisAmount}`;
        if(!jVarLoopInsideDisPercentage) {
            jVarLoopInsideDisPercentage = "0";
        }
        let jVarLoopInsideGrossAmout = `${element.GrossAmount}`;
        let jVarLoopInsideAddOnAmount = `${element.AddOnAmount}`;
        if(!jVarLoopInsideAddOnAmount) {
            jVarLoopInsideAddOnAmount = "0";
        }
        let jVarLoopInsideAmout = `${element.GAmount - element.deliveryItemDisAmount}`;


        k1.innerHTML += `<span style="font-size: 13px;">${LocalSerialNo.toString().padStart(2, " ")}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${" ".repeat(4)}${jVarLoopInsideItem.padEnd(12)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGrossAmout.padStart(11)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideAddOnAmount.padStart(13)}</span>\n`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideDisPercentage.padStart(10)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideAmout.padStart(33)}</span>\n`;
        k1.innerHTML += `---------------------------------------------\n`

    });

    let jVarLocalGrossAmount = LocalInData.map(element => element.GAmount).reduce((a, b) => a + parseInt(b), 0);
    let jVarLocalDesAmount = LocalInData.map(element => element.deliveryItemDisAmount?element.deliveryItemDisAmount:0).reduce((a, b) => a + parseInt(b), 0);
    //jVarLocalDesAmount=jVarLocalDesAmount*jVarLocalGrossAmount/100;
    if(!jVarLocalDesAmount) {
        jVarLocalDesAmount = 0;
    }
    let LocalNetAmount = jVarLocalGrossAmount - jVarLocalDesAmount;
    
    // let jVarLoopInsideDisCount = LocalInData.map(element => {
    //     return element.DisRate;
    // });
    // let jvarLocaltoatalUnitRate = jVarLoopInsideUnitRate.reduce((a, b) => a + parseInt(b), 0)
    // let jvarLocaltoatalDisRate = jVarLoopInsideDisCount.reduce((a, b) => a + parseInt(b), 0)
    // let localNetAmount = jvarLocaltoatalUnitRate - jvarLocaltoatalDisRate;

    // k1.innerHTML += `${" ".repeat(21)}<span style="font-size: 13px;">Gross Amount    :${jvarLocaltoatalUnitRate.toString().padStart(7, " ")}</span>\n`;
    // k1.innerHTML += `${" ".repeat(21)}<span style="font-size: 13px;">Total Discount  :${jvarLocaltoatalDisRate.toString().padStart(7, " ")}</span>\n`;
    k1.innerHTML += `                       <span style="font-size: 16px; font-weight: bold;">Net Amt    :  ${LocalNetAmount}</span>\n`;

};

export { StartFunc };