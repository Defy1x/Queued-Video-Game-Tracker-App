const { User, Game } = require("../../models");
const router = require("express").Router();
// const { searchGames } = require('../../services/rawg');

// Dashboard needs to view all posts from the logged in user

// router.get("/search", async (req, res) => { // /api/games/serach?title=Skyrim
//   const { searchVal } = req.query
//   const games = await searchGames( searchVal );
//   const serializedGames = games.map( ({ name, platforms, released, backgound_image }) => ({
//     name,
//     platforms: platforms.map( ({name}) => name ),
//     released,
//     background_image
//   }))
//   return serializedGames;
// });

router.get("/", async (req, res) => {
    try {
        const rawGamesData = await Game.findAll({
            include: [
                {
                    model: User,
                    as: "game_creator",
                    attributes: ["username"]
                },
            ]
        });
        const gamesData = rawGamesData.map((game) => game.get({ plain: true }));
        res.status(200).json(gamesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
  try {
    const gamesData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "game_creator",
          attributes: ["username"]
      }
      ],
    });
    if (!gamesData) {
      res.status(404).json({ message: "No games found with this id!" });
      return;
    }
    res.status(200).json(gamesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
    try {
        const newGame = await Game.create({
          userId: req.session.user_id,
          gameName: req.body.gameName,
          gameSummary: req.body.gameSummary,
          gameArtwork: req.body.gameArtwork,
          gamePlatform: req.body.gamePlatform,
          gameGenre: req.body.gameGenre,
          gameTag: req.body.gameTag,
          gameESRB: req.body.gameESRB,
          gameReleased: req.body.gameReleased,
          gameRating: req.body.gameRating,
          gamePublisher: req.body.gamePublisher,
          gameDeveloper: req.body.gameDeveloper,
          gameStatus: req.body.gameStatus,
        });
        res.status(200).json(newGame);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Will need to feed in the specific post id through the req.params, and the updated game through req.body
router.put("/:id", async (req, res) => {
    try {
        const updatedGame = await Game.update({
            gamePlaying: req.body.gamePlaying,
            gameStatus: req.body.gameStatus,
            gameProgress: req.body.gameProgress
        },
        {
            where: { id: req.params.id }
        });
        res.status(200).json(updatedGame);
    } catch (err) {
        res.status(400).json(err);
    }
});

// This is for deleting an existing post
// Will need to feed in the specific id for that post
router.delete("/:id", async (req, res) => {
    try {
        const deletedGame = await Game.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json(deletedGame);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
