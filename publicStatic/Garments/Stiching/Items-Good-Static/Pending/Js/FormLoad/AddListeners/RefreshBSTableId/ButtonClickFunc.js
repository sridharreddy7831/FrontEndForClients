import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";

let StartFunc = () => {
  jFLocalHideSpinner();
  StartFuncGetFetch()
    .then((jVarLocalFetchData) => {
      var $table = $("#table");
      return jFLocalInsertItemCount(jVarLocalFetchData).then(
        (processedData) => {
          $table.bootstrapTable("load", processedData);
        }
      );
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
};

function jFLocalInsertItemCount(inData) {
  return Promise.all([
    fetch("/bin/BillsStiching/dataOnly").then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load Bill Data");
      }
      return response.json();
    }),
    fetch("/bin/DeliveryStiching/dataOnly").then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load Delivery data");
      }
      return response.json();
    }),
  ])
    .then(([fetchData1, fetchData2]) => {
      let localArray = [];
      inData.forEach((item) => {
        const filteredData1 = fetchData1.filter(
          (fetchItem) => fetchItem.FK === item.pk.toString()
        );
        const filteredData2 = fetchData2.filter(
          (fetchItem) => fetchItem.FK === item.pk.toString()
        );
        const nonMatchingRecords = filteredData1
          .filter((a1) => !filteredData2.some((a2) => a2.Itempk === a1.pk))
          .concat(
            filteredData2.filter(
              (a2) => !filteredData1.some((a1) => a1.pk === a2.Itempk)
            )
          );
        localArray.push(...nonMatchingRecords);
      });
      return localArray;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

let jFLocalHideSpinner = () => {
  let jVarLocalSpinnerId = document.getElementById("SpinnerId");
  jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc };
