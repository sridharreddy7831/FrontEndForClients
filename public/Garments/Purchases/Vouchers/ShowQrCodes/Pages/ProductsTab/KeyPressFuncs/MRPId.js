let StartFunc = () => {
    let jVarLocalMRPId = document.getElementById("MRPId");
    let jVarLocalQtyId1 = document.getElementById("QtyId1")
    let jvarLocalAmountId = document.getElementById("AmountId")
    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalValueAdditionId = document.getElementById("ValueAdditionId");


    jVarLocalMRPId.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            let jVarLocalCurrentTarget = event.currentTarget;
            let jVarLocalMrpValue = jVarLocalCurrentTarget.value;

            let localCal = ((jVarLocalMrpValue - jVarLocalRate.value) / jVarLocalRate.value) * 100;
            jVarLocalValueAdditionId.value = parseInt(localCal);
            // jvarLocalAmountId.value = jVarLocalMRPId.value * jVarLocalQtyId1.value;
            let jVarLocalCostValue = jVarLocalQtyId1.value * jVarLocalRate.value;
            jvarLocalAmountId.value = jVarLocalCostValue;
        }
    });
};

export { StartFunc }