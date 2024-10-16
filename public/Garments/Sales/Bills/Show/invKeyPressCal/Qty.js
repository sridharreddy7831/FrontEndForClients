let StartFunc = () => {
    let jVarLocalQty = document.getElementById("Qty");
    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");

    jVarLocalQty.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let localQty = parseFloat(jVarLocalQty.value);
            let jVarLocalRatevalue = parseFloat(jVarLocalRate.value);

            jVarLocalGrossAmout.value = (localQty * jVarLocalRatevalue).toFixed(1);
            console.log("GrossAmout:::", jVarLocalGrossAmout.value);

        }
    });



};


export { StartFunc };