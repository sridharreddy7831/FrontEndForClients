let StartFunc = async ({ inFromFetch }) => {
    if (inFromFetch.status === 200) {
        const data = await inFromFetch.json();
        jFLocalToURL({ inRowPK: data.pk })
        LocalReturnObject.KTF = true;
        return await data;
    } else {
        swal.fire({ icon: "error", title: "Duplicate Bill Number" })
    }
};

let jFLocalToURL = ({ inRowPK }) => {
    window.location = `../../Vouchers/LastPurchase/index.html?RowPK=${inRowPK}`;

};

export { StartFunc };