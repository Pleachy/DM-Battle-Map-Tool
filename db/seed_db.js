const {client} = require('./client');


const buildTables = async () => {
    try {
        client.connect();

    } catch (error) {
        throw (error);
    }
}


const populateInitialData = async() => {

}

buildTables()
    .then(populateInitialData)
    .catch(console.error)
    .finally(() => client.end());