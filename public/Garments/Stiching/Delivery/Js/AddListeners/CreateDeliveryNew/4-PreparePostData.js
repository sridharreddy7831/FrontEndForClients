let StartFunc = () => {
  var $table = $("#table");
  var JVarLocalArray = $.map(
    $table.bootstrapTable("getSelections"),
    function (row) {
      let jVarLocalDescription = "dicount-id" + row.pk;
      let jVarLocalHtmlId = document.getElementById(jVarLocalDescription);
      let jVarLocalDiscountValue = jVarLocalHtmlId.value.trim();

      console.log(row);
      return {
        ProductName: row.ProductName,
        GrossAmount: row.GrossAmount,
        ItemDescription: row.ItemDescription,
        AddOnAmount: row.AddOnAmount,
        GAmount: row.GAmount,
        FK: row.FK,
        Itempk: row.pk,
        delivery: row.delivery,
        deliveryItemDisAmount: jVarLocalDiscountValue,
        deliveryItemDescription: jFLocalDescription()
      };
    }
  );
  return JVarLocalArray;
};


let jFLocalDescription = () => {
  let jVarLocalDescription = 'Description';
  let jVarLocalHtmlId = document.getElementById(jVarLocalDescription);

  if ((jVarLocalHtmlId === null) === false) {
    return jVarLocalHtmlId.value.trim();
  };
};

export { StartFunc };