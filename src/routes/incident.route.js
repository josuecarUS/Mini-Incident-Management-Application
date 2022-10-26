const {Router} = require('express');
const route = Router();
const IncidentCtrl = require('../controllers/incident.controller');
const { validatePayload } = require('../middlewares/validate-payload');
const { incidentSchema } = require('../helpers/schemas');

route.post('/incidents', validatePayload(incidentSchema), IncidentCtrl.create);
route.get('/incidents/:id', IncidentCtrl.read);
route.get('/incidents', IncidentCtrl.listAll);
route.put('/incidents/:id', validatePayload(incidentSchema),IncidentCtrl.update);
route.delete('/incidents/:id', IncidentCtrl.delete);

module.exports = route;
