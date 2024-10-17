let StartFunc = async ({ inFetchData }) => {

    let LocalinFetchData = await inFetchData.json();
    let jVarLocalLastRecord = LocalinFetchData[LocalinFetchData.length - 1];

    jFLocalToInputCustomerName({ inValue: jVarLocalLastRecord.CustomerName })
    jFLocalToInputGSTNumber({ inValue: jVarLocalLastRecord.GSTNumber })
};

export { StartFunc }

let jFLocalToInputCustomerName = ({ inValue }) => {
    let jVarLocalHtmlId = 'CustomerName';
    let jVarLocalCustomerName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerName === null === false) {
        jVarLocalCustomerName.value = inValue;
    };
};

let jFLocalToInputGSTNumber = ({ inValue }) => {
    let jVarLocalHtmlId = 'GSTNumber';
    let jVarLocalGSTNumber = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalGSTNumber === null === false) {
        jVarLocalGSTNumber.value = inValue;
    };
    if(inValue === undefined){
        jVarLocalGSTNumber.value="";
    }
};