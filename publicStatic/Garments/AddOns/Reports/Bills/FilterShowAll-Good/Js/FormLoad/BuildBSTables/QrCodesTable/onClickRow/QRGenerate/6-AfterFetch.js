let StartFunc = async ({ inFromFetch }) => {
    if (inFromFetch.KTF === false) {
        Swal.fire({
            icon: 'warning',
            text: inFromFetch.KReason
        });
    } else {
        let raised = inFromFetch.QrCodesRaised;
        if (raised === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Not Raised',
                text: 'Product Details are Empty'
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Raised',
                text: ' QrCodes raised successfully'
            });

            let jVarLocalHtmlId = 'RefreshBSTableId';
            let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
            jVarLocalRefreshBSTableId.click();
        };
    };

};

export { StartFunc };