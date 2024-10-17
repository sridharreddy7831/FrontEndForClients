let StartFunc = ({ inArray }) => {
    // console.log("inArray::", inArray);
    function groupBy(arr, branch) {
        return Object.groupBy(arr, item => item[branch]);
    };

    const grouped = groupBy(inArray, "BillNumber");

    for (const prop of Object.keys(grouped)) {
        grouped[prop] = groupBy(grouped[prop], "ItemGst");
    };
    // console.log("grouped:", grouped);
    return grouped;
    // GrossAmout
};
export { StartFunc }