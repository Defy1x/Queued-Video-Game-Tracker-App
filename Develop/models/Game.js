const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Game extends Model {};

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        gameName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        gameArtwork: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          gameSummary: {
              type: DataTypes.TEXT,
              allowNull: false,
            },
        gamePlatform: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          gameGenre: {
              type: DataTypes.TEXT,
              allowNull: false,
          },
          gameESRB: {
              type: DataTypes.TEXT,
              allowNull: false,
          },
        gameReleased: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          gameRating:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          gamePublisher:{
            type: DataTypes.TEXT,
            allowNull: false,
          },
          gameDeveloper:{
            type: DataTypes.TEXT,
            allowNull: false,
          },
          gamePlaying:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
          gameStatus:{
            type: DataTypes.TEXT,
            allowNull: false,
          },
          gameProgress:{
            type: DataTypes.INTEGER,
            allowNull: true,
          }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "game"
    }
);

module.exports = Game;
