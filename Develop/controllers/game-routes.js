const router = require("express").Router();
const { User, Game } = require("../models");
const checkAuthorization = require("../utils/authorization");

//searches and returns all games with a status of completed
router.get("/progress/:id", async (req, res) => {
    try {
        const userSpecificGames = await Game.findAll({
          where: {
            gameStatus: req.params.id,
            userId: req.session.user_id
          },
            include:
                { model: User, as: "game_creator" }
        });
        const usersGames = userSpecificGames.get({ plain:true });
        console.log(usersGames)
        res.status(200).render("progress", {
            usersGames,
            logged_in: req.session.logged_in,
            userId: req.session.user_id
        })
    } catch (err) {
        res.status(400).json("Page not found!");
    }
});

//searches and returns all games with a status of completed
router.get("/completed/:id", async (req, res) => {
    try {
        const userSpecificGames = await Game.findAll({
          where: {
            gameStatus: req.params.id,
            userId: req.session.user_id
          },
            include:
                { model: User, as: "game_creator" }
        });
        const usersGames = userSpecificGames.get({ plain:true });
        console.log(usersGames)
        res.status(200).render("completed", {
            usersGames,
            logged_in: req.session.logged_in,
            userId: req.session.user_id
        })
    } catch (err) {
        res.status(400).json("Page not found!");
    }
});

//searches and returns all games with the status of not started
router.get("/notstarted/:id", async (req, res) => {
    try {
        const userSpecificGames = await Game.findAll({
          where: {
            gameStatus: req.params.id,
            userId: req.session.user_id
          },
            include:
                { model: User, as: "game_creator" }
        });
        const usersGames = userSpecificGames.get({ plain:true });
        console.log(usersGames)
        res.status(200).render("notstarted", {
            usersGames,
            logged_in: req.session.logged_in,
            userId: req.session.user_id
        })
    } catch (err) {
        res.status(400).json("Page not found!");
    }
});

router.get("/details/:id", async (req, res) => {
    try {
        const userSpecificGames = await Game.findByPk(req.params.id, {
            include:
                { model: User, as: "game_creator" }
        });
        const usersGames = userSpecificGames.get({ plain:true });
        console.log(usersGames)
        res.status(200).render("game-details", {
            usersGames,
            logged_in: req.session.logged_in,
            userId: req.session.user_id
        })
    } catch (err) {
        res.status(400).json("Page not found!");
    }
});

module.exports = router;
