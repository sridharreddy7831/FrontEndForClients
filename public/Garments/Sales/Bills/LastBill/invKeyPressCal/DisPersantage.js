let StartFunc = () => {
    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalDisRate = document.getElementById("DisRate");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");
    let jVarLocalQuantity = document.getElementById("Qty");

    jVarLocalDisPersantage.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let localdisPercentage = parseFloat(jVarLocalDisPersantage.value);
            let jVarLocalRatevalue = parseFloat(jVarLocalRate.value);
            let LocalQuantity = parseFloat(jVarLocalQuantity.value);

            if (LocalQuantity >0) {
                jVarLocalRatevalue = parseInt(jVarLocalRatevalue*LocalQuantity);
            }
            let jVarLocalCurrentTarget = parseInt((localdisPercentage * jVarLocalRatevalue) / 100);

            let localWithDisValue = (jVarLocalRatevalue - jVarLocalCurrentTarget)
            console.log("WithDiscount:",localWithDisValue);
            jVarLocalDisRate.value = jVarLocalCurrentTarget;
            jVarLocalGrossAmout.value = localWithDisValue;

        }
    });

   

};


export { StartFunc };