let StartFunc = async ({ inFromFetch }) => {
    if (inFromFetch.status === 200) {
        const data = await inFromFetch.json();
        jFLocalToURL({ inRowPK: data.pk })
        return await data;
    } else {
        swal.fire({ icon: "error", title: "Duplicate Bill Number" })
    }
};

let jFLocalToURL = ({ inRowPK }) => {

    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("/Garments/Purchases/Vouchers/LastPurchase/index.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    new_url.searchParams.append('FromSave', true);

    window.location.href = new_url.href;

    // window.location.href += "&FromSave=true";

};

export { StartFunc };