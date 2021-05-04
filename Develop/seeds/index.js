const sequelize = require("../config/connection.js");
const seedUsers = require("./userData.js");
const seedGames = require("./gameData.js");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedGames();
    process.exit(0);
};

seedAll();
