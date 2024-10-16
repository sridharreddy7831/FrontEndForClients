import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";

let StartFunc = () => {
    jFLocalHideSpinner();
    StartFuncGetFetch()
        .then(jVarLocalFetchData => {
            var $table = $('#table');
            return jFLocalInsertItemCount(jVarLocalFetchData)
                .then(processedData => {
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
        let LocalArray = []

        inData.forEach(item => {
            const filteredData1 = fetchData1.filter(fetchItem => fetchItem.FK === item.pk.toString());
            const filteredData2 = fetchData2.filter(fetchItem => fetchItem.FK === item.pk.toString());

            if (filteredData1.length === filteredData2.length) {
                item.ItemCount = filteredData1.length;
                item.DeleverCount = filteredData2.length;
                item.PendingCount = item.ItemCount - filteredData2.length;
                LocalArray.push(item)
            };

        });
        return LocalArray;
    }).catch(error => {
        console.error('Error fetching data:', error);
    });

}

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc };
