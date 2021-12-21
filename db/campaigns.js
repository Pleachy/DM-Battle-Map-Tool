const { client } = require('./client');

const getCampaignsById = async(id) => {
    try {
        if(!id) throw Error('missing order id');
        const { rows: [campaign] } = await client.query(`
            SELECT * FROM campaigns
            WHERE id=$1
        `, [id]);
        return campaign;
    } catch (error) {
        throw error;
    }
}

const getAllCampaigns = async () => {
    try {
        const { rows: campaigns } = await client.query(`
            SELECT *
            FROM campaigns
        `);
        return campaigns;
    } catch (error) {
        throw error;
    }
}

const getCampaignsByUserId = ({id}) => {
    try {
        if(!id)throw Error('missing user id');
        const { rows: campaign } = await client.query(`
            SELECT * from campaigns
            WHERE "dmId" = $1
        `, [id]);
    } catch (error) {
        throw error;
    }
}

const createCampaign = async (id) => {
    try {
        const {rows: [campaign]} = await client.query(`
            INSERT INTO campaigns("dmID")
            VALUES ($1)
            RETURNING *;
        `, [id]);
        return campaign;
    } catch (error) {
        throw error;
    }
}

// const users = await Promise.all(usersToCreate.map(createUser));

module.exports = {
    getCampaignsById,
    getAllCampaigns,
    getCampaignsByUserId,
    createCampaign
}