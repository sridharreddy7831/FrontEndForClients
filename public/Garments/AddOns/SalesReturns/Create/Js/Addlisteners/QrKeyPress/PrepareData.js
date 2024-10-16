let StartFunc = () => {
    let jVarLocalQrCode = document.getElementById("AccountNameId");
    let jVarLocalQrCodeValue = jVarLocalQrCode.value
    let Rowpk = parseInt(jVarLocalQrCodeValue.substring(2));

    return Rowpk;
};

export { StartFunc }