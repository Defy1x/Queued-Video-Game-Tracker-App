const { User, Game } = require("../../models");
const router = require("express").Router();


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
          gameWebsite: req.body.gameWebsite,
          gameStatus: req.body.gameStatus,
        });
        res.status(200).json(newGame);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedGame = await Game.update({
            gameStatus: req.body.gameStatus,
        },
        {
            where: { id: req.params.id }
        });
        res.status(200).json(updatedGame);
    } catch (err) {
        res.status(400).json(err);
    }
});


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
