const StartFunc = ({ InData }) => {
    let LocalInData = InData;
    console.log("inData:", LocalInData);
    let LocalDeliveryDate = LocalInData.Date
    
    let LocalTmeStamp = LocalInData.DateTime;
    let dateObj = new Date(LocalTmeStamp);
    const dateOnly = dateObj.toISOString().split('T')[0];
    let LocalSalesDes = ("SalereturnDescription" in LocalInData) ? LocalInData.SalereturnDescription : "";

    let k1 = document.getElementById("PrintDiv");

    k1.innerHTML += `               <span class="inner-pre" style="font-size: 33px; font-weight: ; font-family: Grobek Normal">MAGUVA</span>\n`;
    k1.innerHTML += `     <span class="inner-pre" style="font-size: 16px;">50-50-30/12/2, vandana plaza,</span>\n`
    k1.innerHTML += `        <span class="inner-pre" style="font-size: 16px;">GURUDWARA,VISHAKAPATNAM,</span>\n`
    k1.innerHTML += `<span class="inner-pre" style="font-size: 16px;">GSTIN:37ACJPL9300K2ZB,Ph:08912796666,</span>\n`
    k1.innerHTML += `                <span class="inner-pre" style="font-size: 16px;">State Code:37</span>\n`
    k1.innerHTML += `---------------------------------------------------\n`
    k1.innerHTML += `                  <span class="inner-pre" style="font-size: 16px; font-weight: bold;">ESTIMATION</span> \n`
    k1.innerHTML += `---------------------------------------------------\n`
    k1.innerHTML += `<span class="inner-pre" style="font-size: 16px; font-weight: bold;">EST No      :  ${LocalInData.pk}</span>\n`;
    k1.innerHTML += `<span class="inner-pre" style="font-size: 16px; font-weight: bold;">Customer    :  ${LocalInData.CustomerName}</span>\n`;
    k1.innerHTML += `<span class="inner-pre" style="font-size: 16px; font-weight: bold;">Mobile      :  ${LocalInData.CustomerNumber}</span>\n`;
    // k1.innerHTML += `<span class="inner-pre" style="font-size: 16px; font-weight: bold;">Des         :  ${LocalSalesDes}</span>\n`;
    k1.innerHTML += `---------------------------------------------------\n`
    k1.innerHTML += `<span class="inner-pre" style="font-size: 16px;">Booking Date: ${dateOnly}</span>\n`;
    k1.innerHTML += `<span class="inner-pre" style="font-size: 16px;">Estimated Delivery Date: ${LocalDeliveryDate}</span>\n`;


};


export { StartFunc };