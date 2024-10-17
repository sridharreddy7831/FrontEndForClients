var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./keshav/Vouchers.json', 'utf8'));

let LocalHeaderData = obj.map(element => {
    delete element.InvGrid;

    return element;
});
fs.writeFile("./keshav/Vouchers2.json", JSON.stringify([...LocalHeaderData]), function (err) {
    if (err) throw err;
});
