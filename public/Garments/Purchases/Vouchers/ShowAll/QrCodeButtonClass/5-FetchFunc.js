import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async ({ inBodyData }) => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
        focusCancel: true,
        focusButtonColor: "#0000ff"
    }).then((result) => {
        if (result.isConfirmed) {
            localFetchFunc({ inBodyData })
        }
    });

};


const localFetchFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let inRowPk = jVarLocalBodyData.inRowPk;
    
    let jVarLocalFetchUrl = `/Custom/Clients/Maguva/Generate/Qrcodes/${inRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    console.log("jVarLocalResponse:", jVarLocalResponse);
    StartFuncAfterFetch({ inFromFetch: jVarLocalResponse });

    return jVarLocalResponse;

};
export { StartFunc };
