let StartFunc = async (row, $element, field) => {
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
            reverseButtons:true,
            focusCancel:true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            let jVarDeletedAccountName=row.AccountName;

            await jFLocalClickRowForDelete(row);

            let toastContainer=document.querySelector(".toast-container");
            console.log(toastContainer);
            let toast=document.createElement("div");
            toast.classList.add("toast");
            toast.style.backgroundColor = "#F8D7DA";
            toast.setAttribute("role", "alert");
            toast.setAttribute("aria-live", "assertive");
            toast.setAttribute("aria-atomic", "true");

            let toastBody=document.createElement("div");
            toastBody.classList.add("toast-body");
            toastBody.textContent = `You have deleted Account Name ${jVarDeletedAccountName} .`;

            toast.appendChild(toastBody);
            toastContainer.appendChild(toast);
            
            let bsToast = new bootstrap.Toast(toast);
            bsToast.show();
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