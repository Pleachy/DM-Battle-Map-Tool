const { client } = require('./client');

const createChar = async ({
    userId,
    name,
    ac,
    cmb,
    cmd,
    ffac,
    tac,
    fortSave,
    reflexSave,
    willSave,
    initiative,
    isPublic
}) => {
    try {
        const { rows: [character]} = await client.query(`
            INSERT INTO characters ("userId", name, ac, cmb, cmd, ffac, tac, "fortSave", "reflexSave", "willSave", initiative, "isPublic")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
            RETURNING *;
        `, [userId, name, ac, cmb, cmd, ffac, tac, fortSave, reflexSave, willSave, initiative, isPublic]);
        return character;
    } catch (error) {
        console.error(error);
    };
};

module.exports = {
    createChar
};