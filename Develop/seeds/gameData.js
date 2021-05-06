const sequelize = require("../config/connection.js");
const { Game } = require("../models");

const gameData = [
    {
        userId: 1,
        gameName: "Doom Eternal",
        gameArtwork: "tiny",
        gamePlatform: "PS5",
        gameGenre: "Shooter",
        gameTag: "Single Player",
        gameESRB: "Mature",
        gameReleased: 03/20/2020,
        gameRating: 88,
        gamePublisher: "Bethesda",
        gameDeveloper: "ID Software",
        gamePlaying: true,
        gameStatus: "In Progress",
    },
    {
        userId: 2,
        gameName: "Returnal",
        gameArtwork: "tiny",
        gamePlatform: "PS5",
        gameGenre: "Roguelike",
        gameTag: "Single Player",
        gameESRB: "Teen",
        gameReleased: 03/20/2020,
        gameRating: 86,
        gamePublisher: "Sony Interactive Entertainment",
        gameDeveloper: "Housemarque",
        gamePlaying: true,
        gameStatus: "In Progress",
    }
]

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
