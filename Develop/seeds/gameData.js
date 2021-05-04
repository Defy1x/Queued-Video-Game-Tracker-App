const sequelize = require("../config/connection.js");
const { Game } = require("../models");

const gameData = [
    {
        userId: 1,
        id:1,
        gameName: "Doom Eternal",
        gameSummary: "Dive into the midst of hell and slaughter demons as the Doom Slayer.",
        gamePlatform: "PS5",
        gameGenre: "Shooter",
        gameESRB: "Mature",
        gameReleased: 03/20/2020,
        gameRating: 88,
        gamePublisher: "Bethesda",
        gameDeveloper: "ID Software",
        gamePlaying: true,
        gameStatus: "In Progress",
        gameProgress: 50,

    },
    {
        userId: 2,
        id:2,
        gameName: "Returnal",
        gameSummary: "Returnal is a third-person shooter roguelike video game developed by Housemarque and published by Sony Interactive Entertainment.",
        gamePlatform: "PS5",
        gameGenre: "Roguelike",
        gameESRB: "Teen",
        gameReleased: 03/20/2020,
        gameRating: 86,
        gamePublisher: "Sony Interactive Entertainment",
        gameDeveloper: "Housemarque",
        gamePlaying: true,
        gameStatus: "In Progress",
        gameProgress: 10,
    }
]

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
