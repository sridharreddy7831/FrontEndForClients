let StartFunc = async () => {
    let jVarLocalQrCode = jFLocalQrCode();
    let jVarLocalUrl = `/bin/BillsQrCode/FilterData/pk/${jVarLocalQrCode}`;
    const response = await fetch(jVarLocalUrl);

    if (response.status === 200) {
        return true;
    } else {
        swal.fire({ icon: "erroe", title: "Not Sale" })
    }
};

let jFLocalQrCode = () => {
    let jVarLocalQrCode = 'QrCode'
    let jVarLocalHtmlId = document.getElementById(jVarLocalQrCode);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }