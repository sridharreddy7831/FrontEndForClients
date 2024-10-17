let StartFunc = async (event) => {
    event.preventDefault();

    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            LocalFetchFunc({ RowPk: jVarLocalRowPk })
        }
    });



};

const LocalFetchFunc = async ({ RowPk }) => {
    let jVarLocalRowPk = RowPk;

    let jVarLocalFetchUrl = `/bin/BillsQrCode/${jVarLocalRowPk}`;
    let jVarLocalBodyData = {};
    let jVArLocalHeader = {
        method: "Delete",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let jVarFromFetch = await fetch(jVarLocalFetchUrl, jVArLocalHeader);

    if (jVarFromFetch.status === 200) {
        window.location.href = "";
    };
    if (jVarFromFetch.status === 403) {
        Swal.fire('Row not Deleted..!')
    };


}

export { StartFunc };