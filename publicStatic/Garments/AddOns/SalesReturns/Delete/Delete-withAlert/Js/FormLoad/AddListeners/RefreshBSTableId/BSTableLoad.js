let StartFunc = async (row, $element, field) => {
    // console.log(field);
    if (field === 3) {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "grey",
            returnInputValueOnDismiss: true,
            confirmButtonText: "Yes, delete it!",
            // returnFocus:false,
            reverseButtons:true,
            focusCancel:true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            let jVarDeletedAccountName=row.AccountName;
            document.getElementById("deletedAccountName").textContent=jVarDeletedAccountName;
            await jFLocalClickRowForDelete(row);
            document.getElementById("AlertId").style.display="block";
        };
    };
};

let jFLocalClickRowForDelete = async (inRow) => {
    let LocalRowPk = inRow.pk;

    let jVarLocalFetchUrl = `/bin/Accounts/${LocalRowPk}`;
    let LocalBodyData = {
        method: "DELETE"
    };

    let response = await fetch(jVarLocalFetchUrl, LocalBodyData);

    if (response.status === 200) {
        var $table = $('#table');

        $table.bootstrapTable('refresh');
    };
};

export { StartFunc };