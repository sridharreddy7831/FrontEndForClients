let StartFunc = () => {
    let localReportsData = localStorage.getItem("ReportsData");
    let LocalparseReportsData = JSON.parse(localReportsData);

    jFLocalHideSpinner();
    var $table = $('#table');
    let LocalGetDateData = jFLocalGetDate({ inData: LocalparseReportsData });

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalGetDateData
    });

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};
const jFLocalGetDate = ({ inData }) => {
    let LocalData = inData;

    let LocalstartDateId = document.getElementById("startDateId").value;
    let LocalendDateId = document.getElementById("endDateId").value;
    console.log("LocalstartDateId:",LocalstartDateId);

    return LocalData.filter(item => {
        console.log('item:', item);

        // let itemDate = jFLocalTimeStamp({ indata: item.OrderData.Currentdateandtime })
        let itemDate = item.salePOSDateTime;


        return itemDate >= LocalstartDateId && itemDate <= LocalendDateId;
    });

};
const jFLocalTimeStamp = ({ indata }) => {
    const dateObj = new Date(indata);

    // Format the date into "YYYY-MM-DD" format
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;

};
export { StartFunc }