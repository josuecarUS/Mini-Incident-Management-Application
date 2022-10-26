const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.set('Port', 8080);
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1', require('./src/routes/incident.route'));

app.listen(app.get('Port'), () => {
    console.log('Listening on port', app.get('Port'));
});
