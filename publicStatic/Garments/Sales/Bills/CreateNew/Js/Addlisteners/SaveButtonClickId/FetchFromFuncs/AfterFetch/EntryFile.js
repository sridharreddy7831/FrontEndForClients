let StartFunc = async ({ inFetchData, inBodyData }) => {

    if (inFetchData.status === 200) {
        const url = new URL(window.location.href);
        const params1 = new URLSearchParams(url.search);
        let NewURl = new URL("../LastBill/LastBill.html", url);
        const new_url = new URL(`${NewURl.href}?${params1}`);

        new_url.searchParams.append("ToProducts", true)
        window.location.href = new_url.href;

    } else {
        swal.fire({ icon: "error", text: "Check" })
    }


    // return;
};

export { StartFunc }