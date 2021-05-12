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
            type: DataTypes.STRING,
            allowNull: false,
        },
        gameSummary:{
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gameArtwork: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
        gamePlatform: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          gameGenre: {
              type: DataTypes.TEXT,
              allowNull: true,
          },
          gameTag: {
              type: DataTypes.TEXT,
              allowNull: true,
            },
          gameESRB: {
              type: DataTypes.STRING,
              allowNull: true,
          },
        gameReleased: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          gameRating:{
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          gamePublisher:{
            type: DataTypes.TEXT,
            allowNull: true,
          },
          gameDeveloper:{
            type: DataTypes.TEXT,
            allowNull: true,
          },
          gameStatus:{
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
