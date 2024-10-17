
let StartFunc = async ({ inData }) => {
    let LocalData = inData;
    console.log("local data: ",LocalData);
    jFLocalToInputCnameId({ inValue: LocalData.CustomerName })
    jFLocalToInputCNumberId({ inValue: LocalData.CustomerNumber })
    jFLocalToInputOrderId({ inValue: LocalData.pk })
    jFLocalToInputBookingDate({ inValue: LocalData.DateTime})
};

let jFLocalToInputCnameId = ({inValue}) => {
    let jVarLocalHtmlId = 'CnameId';
    let jVarLocalCnameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCnameId === null === false) {
        jVarLocalCnameId.innerHTML = inValue;
    };
};

let jFLocalToInputCNumberId = ({inValue}) => {
    let jVarLocalHtmlId = 'CNumberId';
   let jVarLocalCNumberId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCNumberId === null === false) {
      jVarLocalCNumberId.innerHTML = inValue;
   };
};

let jFLocalToInputOrderId = ({inValue}) => {
    let jVarLocalHtmlId = 'OrderId';
   let jVarLocalOrderId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalOrderId === null === false) {
    jVarLocalOrderId.innerHTML = inValue;
   };
};

let jFLocalToInputBookingDate = ({inValue}) => {
    const date = new Date(inValue);
    const dateOnly = date.toISOString().split('T')[0]; 
    console.log("date: ", dateOnly);
    let jVarLocalHtmlId = 'BookingDate';
   let jVarLocalBookingDate = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalBookingDate === null === false) {
    jVarLocalBookingDate.innerHTML = dateOnly;
   };
}

export { StartFunc }