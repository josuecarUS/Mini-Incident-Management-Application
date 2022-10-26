const IncidentCtrl = {};
const CsvHandler = require('../csv/csvHandler')

IncidentCtrl.create = async (req, res) => {
    var data = await CsvHandler.readCsv();
    data.push(req.body)
    CsvHandler.writeCsv(data);
    res.status(200).send(req.body).end;
};

IncidentCtrl.read = async (req, res) => {
    var data = await CsvHandler.readCsv();
    var obj = data.filter(val => Number(val.id) == Number(req.params.id));
    res.status(200).send(obj).end;
};

IncidentCtrl.listAll = async (req, res) => {
    const list = await CsvHandler.readCsv();
    res.status(200).send(list).end;
};

IncidentCtrl.update = async (req, res) => {
    var data = await CsvHandler.readCsv();
    var dataIndex = data.findIndex(val => Number(val.id) == Number(req.params.id));
    data[dataIndex] = req.body;
    CsvHandler.writeCsv(data);
    res.status(200).send(data).end;
};

IncidentCtrl.delete = async (req, res) => {
    var data = await CsvHandler.readCsv();
    data = data.filter(val => Number(val.id) !== Number(req.params.id));
    CsvHandler.writeCsv(data);
    res.status(200).send(data).end;
};

module.exports = IncidentCtrl;
