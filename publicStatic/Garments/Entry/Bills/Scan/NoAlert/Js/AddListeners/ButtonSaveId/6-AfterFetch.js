let StartFunc = ({ inFromFetch }) => {
    let jVarLocalFetchData = inFromFetch;
    if (jVarLocalFetchData.KTF === true) {
        jFLocalForSuccess({ inFromFetch });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${inFromFetch.KReason},${JSON.stringify(inFromFetch.ServerSideCheck[0])}`
        })
        console.log("Error", inFromFetch.KReason);
    };
};

let jFLocalForSuccess = ({ inFromFetch }) => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    params1.set("ShowAlert", true);
    params1.set("NewPk", inFromFetch.NewPk);
    let NewURl = new URL("../ShowAlert/ShowAlert.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};



export { StartFunc };