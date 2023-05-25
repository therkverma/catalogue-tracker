const express = require('express');
const { DataService } = require('./dataService');

const app = express();

app.use('/', express.static(`${__dirname}/../client`));

const dataSvc = new DataService();

app.use('/api/data', dataSvc.router);
const port = process.env.PORT || 5000;

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason);
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
});

app.set('port', port);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
