var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./keshav/Items.json', 'utf8'));
let LocalHeaderData = obj.map(element => {
    element.Factor = "1";
    return element;
});
fs.writeFile("./keshav/Items.json", JSON.stringify([...LocalHeaderData]), function (err) {
    if (err) throw err;
});
