let StartFunc = async ({ inFromFetch }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
    console.log("inFromFetch:", inFromFetch);
    if (inFromFetch.KTF === false) {
        // LocalReturnObject.KReason = data.KReason;
        // return await LocalReturnObject;
        Swal.fire({
            icon: 'warning',
            title: 'Raised',
            text: inFromFetch.KReason
        });
    } else {
        // LocalReturnObject.JsonData = data.JsonData;
        // LocalReturnObject.KTF = true;
        let raised = inFromFetch.QrCodesRaised;
        console.log("inFromFetch.QrCodesRaised", raised);
        if (raised === 0) {
            // LocalReturnObject.KReason = data.KReason;
            // return await LocalReturnObject;
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
            // title: 'QR Code Generatimg..!',
            // html: 'Generating QR <b></b>',
            // timer: 2000,
            // timerProgressBar: true,
            // didOpen: () => {
            //     Swal.showLoading()
            //     const b = Swal.getHtmlContainer().querySelector('b')
            //     timerInterval = setInterval(() => {
            //         b.textContent = Swal.getTimerLeft()
            //     }, 100)
            // },
            // willClose: () => {
            //     clearInterval(timerInterval)
            // }


        };
    };

};

export { StartFunc };