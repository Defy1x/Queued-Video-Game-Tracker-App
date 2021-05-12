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
          defaultValue: "N/A"
        },
        gameArtwork: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "N/A"
          },
        gamePlatform: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "N/A"
          },
          gameGenre: {
              type: DataTypes.TEXT,
              allowNull: true,
              defaultValue: "N/A"
          },
          gameTag: {
              type: DataTypes.TEXT,
              allowNull: true,
              defaultValue: "N/A"
            },
          gameESRB: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "N/A"
          },
        gameReleased: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "N/A"
          },
          gameRating:{
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: "N/A"
          },
          gamePublisher:{
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "N/A"
          },
          gameDeveloper:{
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "N/A"
          },
          gameStatus:{
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: "N/A"
          },
          gameWebsite:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "N/A"
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
