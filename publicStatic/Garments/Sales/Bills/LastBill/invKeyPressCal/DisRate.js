let StartFunc = () => {
    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalDisRate = document.getElementById("DisRate");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");


    jVarLocalDisRate.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let localdisRateValue = parseInt(jVarLocalDisRate.value);
            let jVarLocalRatevalue = parseInt(jVarLocalRate.value);

            let localWithDisValue = (localdisRateValue / jVarLocalRatevalue) * 100;
            // let jVarLocalCurrentTarget = parseInt((localWithDisValue / jVarLocalRatevalue) * 100);
            jVarLocalDisPersantage.value = localWithDisValue;
            jVarLocalGrossAmout.value = (jVarLocalRatevalue - localdisRateValue);

        }
    });

};

export { StartFunc };