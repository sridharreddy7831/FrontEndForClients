//import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";
import { StartFunc as DeleteFuncsStartFunc } from "./ButtonFuncs/DeleteFuncs.js";
import { StartFunc as StartFuncQrCodeButtonClass } from "./QrCodeButtonClass/1-ClickAssign.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalDeleteButtons = document.getElementsByClassName("DeleteButtonClass");

    for (var i = 0; i < jVarLocalDeleteButtons.length; i++) {
        jVarLocalDeleteButtons[i].addEventListener("click", async (event) => {
            await DeleteFuncsStartFunc({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            })
        });
    };

    StartFuncQrCodeButtonClass({ inProjectName });
};

let LocalPostQrCodeButtonFuncs = ({ inProjectName }) => {
    let jVarLocalDeleteButtons = document.getElementsByClassName("PostQrCodeButtonClass");

    for (var i = 0; i < jVarLocalDeleteButtons.length; i++) {
        jVarLocalDeleteButtons[i].addEventListener("click", async (event) => {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;

            let jVarLocalFromGet = await GetFunc({
                inRowPk: jVarLocalRowPk,
                inProjectName
            });

            if (jVarLocalFromGet.KTF === false) {
                Swal.fire({
                    icon: 'success',
                    title: 'Raised',
                    text: jVarLocalFromGet.KReason
                });
            };

            if (jVarLocalFromGet.KTF) {
                // window.location.href = `../ShowAll/ShowAll.html?RowPK=${jVarLocalRowPk}`;
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
        });
    };
};

let GetFunc = async ({ inRowPk, inProjectName }) => {

    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Custom/PostFromPk/${inRowPk}`;

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