const express = require('express');
const path = require('path');
const csv=require('csvtojson')


class DataService {
    constructor(options) {
        this._options = options;
        this._router = express.Router();
        this.initializeRoutes();
    }

    get router() {
        return this._router;
    }

    initializeRoutes() {
        this.router.get('/csv-data', async (req, res) => {
            const directoryPath = path.join(__dirname, 'data.csv');
            const jsonArray = await csv().fromFile(directoryPath);
            res.status(200).json(jsonArray);
        });

        this.router.get('/store-ip', async (req, res) => {
            const directoryPath = path.join(__dirname, 'data.csv');
            const jsonArray = await csv().fromFile(directoryPath);
            res.status(200).json(jsonArray);
        });
    }
}

exports.DataService = DataService;
