'use strict'

const mongoose = require('mongoose');
const connection_string = 'mongodb+srv://admin:mysupersecretpassword@development-cluster.sqqfkqj.mongodb.net/ecommerce';

class Database {
    constructor(){}

    connect(type = 'mongo') {
        mongoose.connect(connection_string)
            .then(() => console.log('Mongodb connect successfully!'))
            .catch((err) => console.error(`Connection fail:`, err))
    }
}