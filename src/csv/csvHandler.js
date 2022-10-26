const CsvHandler = {};
var fs = require('fs');
var { parse } = require('csv-parse/sync');
//var stringify = require('csv-stringify');
const { stringify } = require("csv-stringify");
var fs = require('fs');

CsvHandler.readCsv = async function () {
    const fileContent = await fs.readFileSync(__dirname + '/incidents.csv');
    const records = parse(fileContent, { columns: true });
    return records;
};

CsvHandler.writeCsv = async function (data) {

    await stringify(data, {
        header: true
    }, function (err, output) {
        fs.writeFileSync(__dirname + '/incidents.csv', output);
    });
};

module.exports = CsvHandler;
