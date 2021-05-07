const User = require("./User.js");
const Game = require("./Game.js");

// User - Game/User relations
User.hasMany(Game, {
    foreignKey: "userId",
    as: "game_creator",
    onDelete: "CASCADE",
});

Game.belongsTo(User, {
    foreignKey: "userId",
    as: "game_creator",
});

module.exports = { User, Game };
