let StartFunc = async ({ inFromFetch }) => {
    if (inFromFetch.status === 200) {
        const data = await inFromFetch.json();
        jFLocalToURL()
        return await data;
    } else {
        swal.fire({ icon: "error", title: "Duplicate" })
    }
};

let jFLocalToURL = () => {
    window.location = "../ShowAll/ShowAll.html?FromSave=true";
};

export { StartFunc };