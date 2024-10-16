const StartFunc = ({ inData }) => {
    DisRateTotal({ inData })
    GRateTotal({ inData });


};

const DisRateTotal = ({ inData }) => {
    let localDisRate = inData.map(ele => ele.DisRate);
    const sum = localDisRate.reduce((acc, cur) => acc + cur, 0);
    jFLocalToInnerHtmlTotalDisRateId({ inTotalDisRateId: sum });


};

const GRateTotal = ({ inData }) => {
    let localGrossAmout = inData.map(ele => ele.GrossAmout);
    const sum = localGrossAmout.reduce((acc, cur) => acc + cur, 0);
    jFLocalToInnerHtmlTotalGRateId({ inTotalGRateId: sum });


};

let jFLocalToInnerHtmlTotalDisRateId = ({ inTotalDisRateId }) => {
    let jVarLocalHtmlId = 'TotalDisRateId';
    let jVarLocalTotalDisRateId = document.getElementById(jVarLocalHtmlId);
    jVarLocalTotalDisRateId.innerHTML = inTotalDisRateId;
};

let jFLocalToInnerHtmlTotalGRateId = ({ inTotalGRateId }) => {
    let jVarLocalHtmlId = 'TotalGRateId';
   let jVarLocalTotalGRateId = document.getElementById(jVarLocalHtmlId);
   jVarLocalTotalGRateId.innerHTML = `₹ ${inTotalGRateId}`;
};

export { StartFunc };