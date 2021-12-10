const {client} = require('./client');


const buildTables = async () => {
    try {
        client.connect();

        //dropping tables
        console.log('Dropping tables....');
        await client.query(`
        DROP TABLE IF EXISTS campaign_maps;
        DROP TABLE IF EXISTS maps;
        DROP TABLE IF EXISTS campaign_users;
        DROP TABLE IF EXISTS campaigns;
        DROP TABLE IF EXISTS characters;
        DROP TABLE IF EXISTS users;
        `)
        console.log('Tables dropped successfully');



        //building tables
        console.log('Creating tables....');
        await client.query(`
        
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            "profileImage" VARCHAR(255),
            "phoneNumber" INTEGER UNIQUE
        );

        CREATE TABLE characters (
            id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(id),
            name VARCHAR(255) NOT NULL,
            ac INTEGER NOT NULL,
            cmb INTEGER NOT NULL,
            cmd INTEGER NOT NULL,
            ffac INTEGER NOT NULL,
            tac INTEGER NOT NULL,
            "fortSave" INTEGER NOT NULL,
            "reflexSave" INTEGER NOT NULL,
            "willSave" INTEGER NOT NULL,
            initiative INTEGER NOT NULL,
            "isPublic" BOOLEAN DEFAULT false
        );

        CREATE TABLE campaigns (
            id SERIAL PRIMARY KEY,
            "dmId" INTEGER REFERENCES users(id)
        );

        CREATE TABLE campaign_users (
            id SERIAL PRIMARY KEY,
            "campaignId" INTEGER REFERENCES campaigns(id),
            "userId" INTEGER REFERENCES users(id)
        );

        CREATE TABLE maps (
            id SERIAL PRIMARY KEY,
            "creatorId" INTEGER REFERENCES users(id)
        );

        CREATE TABLE campaign_maps (
            id SERIAL PRIMARY KEY,
            "campaignId" INTEGER REFERENCES campaigns(id),
            "mapId" INTEGER REFERENCES maps(id)
        );
        

        `)
        console.log('Tables Created Successfully');


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