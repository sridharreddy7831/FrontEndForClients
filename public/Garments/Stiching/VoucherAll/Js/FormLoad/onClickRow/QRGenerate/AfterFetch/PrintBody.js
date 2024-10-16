const StartFunc = ({ InData }) => {
    let LocalInData = InData;
    console.log("data: ", LocalInData);
    let k1 = document.getElementById("PrintDiv");

    k1.innerHTML += `----------------------------------------------------\n`
    k1.innerHTML += ` <span style="font-size: 13px;">#   ItemName                Rate       Add-On    G-Rate</span>\n`
    // k1.innerHTML += `---------------------------------------------\n`
    // k1.innerHTML += `         <span style="font-size: 13px;">Discount                      G-Rate</span>\n`
    k1.innerHTML += `----------------------------------------------------\n`
    LocalInData.forEach((element, index) => {
        let LocalSerialNo = index + 1;
        let jVarLoopInsideItem = `${element.ProductName}`;
        // let jVarLoopInsideRate = `${element.UnitRate}`;
        // let jVarLoopInsideDisPercentage = `${element.DisPercentage}%-${element.DisRate}`;
        let jVarLoopInsideGrossAmout = `${element.GrossAmount}`;
        let jVarLoopInsideAddOnAmout = `${element.AddOnAmount}`;
        let jVarLoopInsideGAmout = `${element.GAmount}`;


        k1.innerHTML += `<span style="font-size: 13px;">${LocalSerialNo.toString().padStart(2, " ")}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${" ".repeat(4)}${jVarLoopInsideItem.padEnd(20)}</span>`;
        // k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideDisPercentage.padStart(17)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGrossAmout.padStart(8)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideAddOnAmout.padStart(10)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGAmout.padStart(10)}</span>\n`;


        k1.innerHTML += `----------------------------------------------------\n`

    });

    let jVarLocalGrossAmount = LocalInData.map(element => element.GAmount).reduce((a, b) => a + parseInt(b), 0);
    // let jVarLoopInsideDisCount = LocalInData.map(element => {
    //     return element.DisRate;
    // });
    // let jvarLocaltoatalUnitRate = jVarLoopInsideUnitRate.reduce((a, b) => a + parseInt(b), 0)
    // let jvarLocaltoatalDisRate = jVarLoopInsideDisCount.reduce((a, b) => a + parseInt(b), 0)
    // let localNetAmount = jvarLocaltoatalUnitRate - jvarLocaltoatalDisRate;

    // k1.innerHTML += `${" ".repeat(21)}<span style="font-size: 13px;">Gross Amount    :${jvarLocaltoatalUnitRate.toString().padStart(7, " ")}</span>\n`;
    // k1.innerHTML += `${" ".repeat(21)}<span style="font-size: 13px;">Total Discount  :${jvarLocaltoatalDisRate.toString().padStart(7, " ")}</span>\n`;
    k1.innerHTML += `                       <span style="font-size: 16px; font-weight: bold;">Net Amt    :  ${jVarLocalGrossAmount}</span>\n`;

};

export { StartFunc };