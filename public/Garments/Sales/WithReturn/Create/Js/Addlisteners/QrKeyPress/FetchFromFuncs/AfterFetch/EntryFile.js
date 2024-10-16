let StartFunc = ({ inData }) => {
    let LocalData = inData;
    // console.log("inData:", inData);
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../ShowAll/ShowAll.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    // window.location.href = new_url.href;
    LocalFuncForpk({ inValue: LocalData.pk })
    LocalFuncForProductName({ inValue: LocalData.ProductName })
    LocalFuncForCostPrice({ inValue: LocalData.CostPrice })
    LocalFuncForBillNumber({ inValue: LocalData.BillNumber })
    LocalFuncForInventorySerial({ inValue: LocalData.InventorySerial })
    LocalFuncForPercentageValueAddition({ inValue: LocalData.PercentageValueAddition })
    LocalFuncForPurchasePk({ inValue: LocalData.PurchasePk })
    LocalFuncForSalePrice({ inValue: LocalData.CostPrice })
    LocalFuncForSupplierName({ inValue: LocalData.SupplierName })
    LocalFuncForUserDescription({ inValue: LocalData.UserDescription })
};

export { StartFunc }
let LocalFuncForpk = ({ inValue }) => {
    let jVarLocalProductName = document.getElementById('QrCode');

    if (jVarLocalProductName === null === false) {
        jVarLocalProductName.value = inValue;
    };
};

let LocalFuncForProductName = ({ inValue }) => {
    let jVarLocalProductName = document.getElementById('ProductName');

    if (jVarLocalProductName === null === false) {
        jVarLocalProductName.value = inValue;
    };
};

let LocalFuncForCostPrice = ({ inValue }) => {
    let jVarLocalProductName = document.getElementById('CostPrice');

    if (jVarLocalProductName === null === false) {
        jVarLocalProductName.value = inValue;
    };
};

let LocalFuncForBillNumber = ({ inValue }) => {
    let jVarLocalProductName = document.getElementById('BillNumber');

    if (jVarLocalProductName === null === false) {
        jVarLocalProductName.value = inValue;
    };
};

let LocalFuncForInventorySerial = ({ inValue }) => {
    let jVarLocalProductName = document.getElementById('InventorySerial');

    if (jVarLocalProductName === null === false) {
        jVarLocalProductName.value = inValue;
    };
};

let LocalFuncForPercentageValueAddition = ({ inValue }) => {
    let jVarLocalProductName = document.getElementById('PercentageValueAddition');

    if (jVarLocalProductName === null === false) {
        jVarLocalProductName.value = inValue;
    };
};

let LocalFuncForPurchasePk = ({ inValue }) => {
    let jVarLocalProductName = document.getElementById('PurchasePk');

    if (jVarLocalProductName === null === false) {
        jVarLocalProductName.value = inValue;
    };
};

let LocalFuncForSalePrice = ({ inValue }) => {
    let jVarLocalProductName = document.getElementById('SalePrice');

    if (jVarLocalProductName === null === false) {
        jVarLocalProductName.value = inValue;
    };
};

let LocalFuncForSupplierName = ({ inValue }) => {
    let jVarLocalProductName = document.getElementById('SupplierName');

    if (jVarLocalProductName === null === false) {
        jVarLocalProductName.value = inValue;
    };
};

let LocalFuncForUserDescription = ({ inValue }) => {
    let jVarLocalProductName = document.getElementById('UserDescription');

    if (jVarLocalProductName === null === false) {
        jVarLocalProductName.value = inValue;
    };
};