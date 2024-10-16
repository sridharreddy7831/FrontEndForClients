let StartFunc = ({ inObject }) => {
    for (const [key, value] of Object.entries(inObject)) {
        for (const [SecondKey, SecondValue] of Object.entries(value)) {
            let LoopInsideGrossAmout = SecondValue.map(element => element.GrossAmout);
            let LoopInsideDisRate = SecondValue.map(element => element.DisRate);
            let LoopInsideUnitRate = SecondValue.map(element => element.UnitRate);
            let LoopInsideTotal = LoopInsideGrossAmout.reduce((a, b) => a + b, 0); // 10
            let LoopInDisRateTotal = LoopInsideDisRate.reduce((a, b) => a + b, 0); // 10
            let LoopInUnitRate = LoopInsideUnitRate.reduce((a, b) => a + b, 0); // 10
            SecondValue.UnitRate = LoopInUnitRate
            SecondValue.TotalDisRate = LoopInDisRateTotal
            SecondValue.TotalAmount = LoopInsideTotal
        }
    };
};
export { StartFunc }