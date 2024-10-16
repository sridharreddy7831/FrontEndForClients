let StartFunc = async ({ inRowPK }) => {
    let localReturnRowPK = inRowPK;
    let localProjectName = "JSONApi";

    let jVarLocalFromGet = await GetFunc({
        inRowPk: localReturnRowPK,
        inProjectName: localProjectName
    });

    if (jVarLocalFromGet.KTF === false) {
        Swal.fire({
            icon: 'success',
            title: 'Raised',
            text: jVarLocalFromGet.KReason
        });
    };

    if (jVarLocalFromGet.KTF) {
        // window.location.href = `../Show/Show.html?RowPK=${jVarLocalRowPk}`;
        let timerInterval
        Swal.fire({
            title: 'QR Code Generatimg..!',
            html: 'Generating QR <b></b>',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    };
};

let GetFunc = async ({ inRowPk, inProjectName }) => {
    let LocalinRowPk = localStorage.getItem("RowPK");
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        // let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Custom/PostFromPk/${inRowPk}`;
        let jVarLocalFetchUrl = `/Custom/Clients/Maguva/Generate/Qrcodes/${LocalinRowPk}`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        if (data.KTF === false) {
            LocalReturnObject.KReason = data.KReason;
            return await LocalReturnObject;
        };

        LocalReturnObject.JsonData = data.JsonData;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };

