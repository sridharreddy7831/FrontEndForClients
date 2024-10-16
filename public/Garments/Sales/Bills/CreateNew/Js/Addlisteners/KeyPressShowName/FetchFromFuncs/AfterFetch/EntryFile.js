let StartFunc = async ({ inFetchData }) => {

    let LocalinFetchData = await inFetchData.json();
    let jVarLocalLastRecord = LocalinFetchData[LocalinFetchData.length - 1];

    jFLocalToInputCustomerNumber({ inValue: jVarLocalLastRecord.CustomerNumber })
    jFLocalToInputGSTNumber({ inValue: jVarLocalLastRecord.GSTNumber })
};

export { StartFunc }

let jFLocalToInputCustomerNumber = ({ inValue }) => {
    let jVarLocalHtmlId = 'CustomerNumber';
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
    if (inValue === undefined) {
        jVarLocalGSTNumber.value="";
    }
};