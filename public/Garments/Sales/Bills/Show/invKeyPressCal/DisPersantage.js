let StartFunc = () => {
    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalDisRate = document.getElementById("DisRate");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");

    jVarLocalDisPersantage.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let localdisPercentage = parseInt(jVarLocalDisPersantage.value);
            let jVarLocalRatevalue = parseInt(jVarLocalRate.value);

            let jVarLocalCurrentTarget = parseInt((localdisPercentage * jVarLocalRatevalue) / 100);
            let localWithDisValue = (jVarLocalRatevalue - jVarLocalCurrentTarget)
            jVarLocalDisRate.value = jVarLocalCurrentTarget;
            jVarLocalGrossAmout.value = localWithDisValue;

        }
    });

   

};


export { StartFunc };