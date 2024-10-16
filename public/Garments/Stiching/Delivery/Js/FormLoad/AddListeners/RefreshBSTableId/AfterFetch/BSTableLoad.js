let StartFunc = async (row, $element, field) => {
    console.log(field);
    if (field === 5) {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "grey",
            returnInputValueOnDismiss: true,
            confirmButtonText: "Yes, delete it!",
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            await jFLocalClickRowForDelete(row);
        };
    };
};

let jFLocalClickRowForDelete = async (inRow) => {
    let LocalRowPk = inRow.pk;
    console.log(inRow);

    let jVarLocalFetchUrl = `/bin/BillsStiching/${LocalRowPk}`;
    let LocalBodyData = {
        method: "DELETE"
    };

    let response = await fetch(jVarLocalFetchUrl, LocalBodyData);

    if (response.status === 200) {
        window.location.href = "";
        // var $table = $('#table');

        // $table.bootstrapTable('refresh');
    };
};

export { StartFunc };