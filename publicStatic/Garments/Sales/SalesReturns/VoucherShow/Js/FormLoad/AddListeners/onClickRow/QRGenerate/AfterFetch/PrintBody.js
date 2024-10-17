const StartFunc = ({ InData }) => {
    let LocalInData = InData;
    let k1 = document.getElementById("PrintDiv");

    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += ` <span style="font-size: 13px;">#   Code/ItemName                       Rate</span>\n`
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `         <span style="font-size: 13px;">Discount                      G-Rate</span>\n`
    k1.innerHTML += `---------------------------------------------\n`
    LocalInData.forEach((element, index) => {
        let LocalSerialNo = index + 1;
        let jVarLoopInsideItem = `M-${element.pk}/${element.ProductName}`;
        let jVarLoopInsideRate = `${element.UnitRate}`;
        let jVarLoopInsideDisPercentage = `${element.DisPercentage}%-${element.DisRate}`;
        let jVarLoopInsideGrossAmout = `${element.GrossAmount}`;

        k1.innerHTML += `<span style="font-size: 13px;">${LocalSerialNo.toString().padStart(2, " ")}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${" ".repeat(4)}${jVarLoopInsideItem.padEnd(24)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideRate.padStart(15)}</span>\n`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideDisPercentage.padStart(17)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGrossAmout.padStart(28)}</span>\n`;
        k1.innerHTML += `---------------------------------------------\n`

    });

    let jVarLoopInsideUnitRate = LocalInData.map(element => {
        return element.UnitRate;
    });
    let jVarLoopInsideDisCount = LocalInData.map(element => {
        return element.DisRate;
    });
    let jvarLocaltoatalUnitRate = jVarLoopInsideUnitRate.reduce((a, b) => a + parseInt(b), 0)
    let jvarLocaltoatalDisRate = jVarLoopInsideDisCount.reduce((a, b) => a + parseInt(b), 0)
    let localNetAmount = jvarLocaltoatalUnitRate - jvarLocaltoatalDisRate;

    k1.innerHTML += `${" ".repeat(21)}<span style="font-size: 13px;">Gross Amount    :${jvarLocaltoatalUnitRate.toString().padStart(7, " ")}</span>\n`;
    k1.innerHTML += `${" ".repeat(21)}<span style="font-size: 13px;">Total Discount  :${jvarLocaltoatalDisRate.toString().padStart(7, " ")}</span>\n`;
    k1.innerHTML += `                       <span style="font-size: 16px; font-weight: bold;">Net Amt    :  ${ localNetAmount}</span>\n`;

};

export { StartFunc };