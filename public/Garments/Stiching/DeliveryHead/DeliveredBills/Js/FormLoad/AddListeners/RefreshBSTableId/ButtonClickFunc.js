import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";

let StartFunc = () => {
    jFLocalHideSpinner();
    StartFuncGetFetch()
        .then(jVarLocalFetchData => {
            var $table = $('#table');
            return jFLocalInsertItemCount(jVarLocalFetchData)
                .then(processedData => {
                    console.log("processedData:",processedData);
                    $table.bootstrapTable("load", processedData);
                });
        })
        .catch(error => {
            console.error("Error occurred:", error);
        });
};

function jFLocalInsertItemCount(inData) {
    return Promise.all([
        fetch('/bin/BillsStiching/dataOnly').then(response => {
            if (!response.ok) {
                throw new Error('Failed to load Bill Data');
            }
            return response.json();
        }),
        fetch('/bin/DeliveryStiching/dataOnly').then(response => {
            if (!response.ok) {
                throw new Error('Failed to ,oad Delivery data');
            }
            return response.json();
        })
    ]).then(([fetchData1, fetchData2]) => {
        const processedData = inData.map(item => {
            const filteredData1 = fetchData1.filter(fetchItem => fetchItem.FK === item.pk.toString());
            const filteredData2 = fetchData2.filter(fetchItem => fetchItem.FK === item.pk.toString());

            // let jVarLocalDeliveredDate = JLocalDateFunc({ inDate: item.DateTime });
            // let jVarLocalDate = JLocalDateFunc({ inDate: filteredData2.DateTime });
            item.ItemCount = filteredData1.length;
            item.DeleverCount = filteredData2.length;
            item.PendingCount = item.ItemCount - filteredData2.length;
            item.DateTime = JLocalDateFunc({ inDate: item.DateTime });

            return item;
        });
        return processedData;
    }).catch(error => {
        console.error('Error fetching data:', error);
    });

}

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

const JLocalDateFunc = ({ inDate }) => {
    return new Date(inDate).toLocaleString("en-GB", { timeZone: "UTC", }).replace(",", "");
};

export { StartFunc };
