let StartFunc = () => {
    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalDisRate = document.getElementById("DisRate");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");

    jVarLocalGrossAmout.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let jVarLocalRatevalue = parseInt(jVarLocalRate.value);

            jVarLocalDisRate.value = jVarLocalRatevalue - jVarLocalGrossAmout.value;

            jVarLocalDisPersantage.value = (jVarLocalDisRate.value / jVarLocalRate.value) * 100;
        }
    });
};

export { StartFunc };