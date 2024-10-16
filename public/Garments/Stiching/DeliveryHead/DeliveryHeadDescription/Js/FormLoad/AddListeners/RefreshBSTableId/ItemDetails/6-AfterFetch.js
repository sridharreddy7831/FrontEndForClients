let StartFunc = async (response) => {

    if (response.status === 200) {
        let Localdata = await response.json();
        jFLocalHideSpinner();
        var $table = $('#table');
        $table.bootstrapTable({
            data: Localdata
        })
    }else{
        swal.fire({icon:"error",title:"No data"})
    }

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }