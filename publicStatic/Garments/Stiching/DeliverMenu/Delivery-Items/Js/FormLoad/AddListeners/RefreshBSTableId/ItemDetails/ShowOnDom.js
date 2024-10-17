
let StartFunc = async ({ inData }) => {
    let LocalData = inData[0];
    jFLocalToInputOrderId({ inValue: LocalData.pk })
};


let jFLocalToInputOrderId = ({inValue}) => {
    let jVarLocalHtmlId = 'OrderId';
   let jVarLocalOrderId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalOrderId === null === false) {
    jVarLocalOrderId.innerHTML = inValue;
   };
};


export { StartFunc }