let StartFunc = () => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../../BillPrint/Show/Show.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;

    // http://localhost:7017/Garments/Sales/
};

export { StartFunc }