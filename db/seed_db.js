const {client} = require('./client');


const buildTables = async () => {
    try {
        client.connect();

        //dropping tables
        console.log('Dropping tables....');
        await client.query(`
        DROP TABLE IF EXISTS users
        `)



        //building tables
        console.log('Creating tables....');
        await client.query(`
        
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            profileImage VARCHAR(255),
            phoneNumber INT UNIQUE
        );

        CREATE TABLE characters
        )


        
        `)

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