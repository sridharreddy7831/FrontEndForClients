import { StartFunc as StartFuncBSTableLoad } from "./BSTableLoad.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";

let StartFunc = async ({ StichingPOS, BillsStiching, DeliveryStiching }) => {
    StartFuncShowOnDom({ StichingPOS })
    var $table = $('#table');

    if (BillsStiching.status === 200) {
        let Localdata = await BillsStiching.json();
        let JVarLocalDeliveryStichingData = DeliveryStiching;

        const unmatchedItems = Localdata.filter(item1 => !JVarLocalDeliveryStichingData.some(item2 => item1.pk === item2.Itempk));

        jFLocalHideSpinner();
        $table.bootstrapTable({
            data: unmatchedItems,
            onClickRow: StartFuncBSTableLoad

        });

    } else {
        swal.fire({ icon: "error", title: "No data" })
    };

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }