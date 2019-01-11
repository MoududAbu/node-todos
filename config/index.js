const configValue = require('./config');

module.exports = {

    getDbConnection: ()=> {
        return `mongodb://${configValue.url}`;
    }

};