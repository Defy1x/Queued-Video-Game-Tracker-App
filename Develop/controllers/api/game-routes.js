const { User, Game } = require("../../models");
const router = require("express").Router();

// Dashboard needs to view all posts from the logged in user

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
        const gamesData = rawGamesData.map((post) => game.get({ plain: true }));
        res.status(200).json(gamesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const gamePost = await Game.create({
            userId: req.body.userId,
            blogContent: req.body.blogContent
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
            blogContent: req.body.blogContent
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
        const deletedPost = await Game.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json(deletedGame);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
