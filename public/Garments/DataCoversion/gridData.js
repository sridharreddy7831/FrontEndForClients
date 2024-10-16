var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./keshav/Vouchers.json', 'utf8'));
let ItemsArray=[];

obj.forEach(VoucherRow => {
    Object.values(VoucherRow.InvGrid).forEach((e) => {
        e.FK=VoucherRow.pk;
        ItemsArray.push(e);
    });
});
fs.writeFile("./keshav/PurchaseItems.json", JSON.stringify([...ItemsArray]), function (err) {
    if (err) throw err;
});
