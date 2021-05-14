const router = require("express").Router();
const { User, Game } = require("../models");
const checkAuthorization = require("../utils/authorization");

//searches and returns all games with a status of completed
router.get("/progress/:id", checkAuthorization, async (req, res) => {
    try {
        const userSpecificGames = await Game.findAll({
          where: {
            gameStatus: 1,
            userId: req.session.user_id
          },
            include:
                { model: User, as: "game_creator" }
        });
        const usersGames = userSpecificGames.map((game) => game.get({ plain:true }));
        console.log(usersGames)

        const user = await User.findByPk(req.session.user_id)
        const userObj = user.get({plain: true})
        const usersDisplay = {game_creator: {username: userObj.username}}

        res.status(200).render("progress", {
            usersDisplay,
            usersGames,
            logged_in: req.session.logged_in,
            userId: req.session.user_id
        })
    } catch (err) {
        console.log(err)
        res.status(400).json("Page not found!");
    }
});

router.get("/stats", async (req, res) => {

  // res.json("hey!");

    try {
        const userSpecificGames = await Game.count({
              attributes: ['gameStatus'],
              group: 'gameStatus',
          where: {
            // gameStatus: 1,
            userId: req.session.user_id
          },
            include:
                { model: User, as: "game_creator" }
        });
        // const usersGames = userSpecificGames.map((game) => game.get({ plain:true }));
        // console.log(usersGames)
        res.status(200).json({
          userSpecificGames,
          logged_in: req.session.logged_in,
          userId: req.session.user_id
        })
    } catch (err) {
        console.log(err)
        res.status(400).json("Page not found!");
    }
});


//searches and returns all games with a status of completed
router.get("/completed/:id", checkAuthorization, async (req, res) => {
    try {
        const userSpecificGames = await Game.findAll({
          where: {
            gameStatus: 2,
            userId: req.session.user_id
          },
            include:
                { model: User, as: "game_creator" }
        });
        const usersGames = userSpecificGames.map((game) => game.get({ plain:true }));
        console.log(usersGames)
        const user = await User.findByPk(req.session.user_id)
        const userObj = user.get({plain: true})
        const usersDisplay = {game_creator: {username: userObj.username}}
        res.status(200).render("completed", {
            usersDisplay,
            usersGames,
            logged_in: req.session.logged_in,
            userId: req.session.user_id
        })
    } catch (err) {
        res.status(400).json("Page not found!");
    }
});

//searches and returns all games with the status of not started
router.get("/notstarted/:id", checkAuthorization, async (req, res) => {
    try {
        const userSpecificGames = await Game.findAll({
          where: {
            gameStatus: 3,
            userId: req.session.user_id
          },
            include:
                { model: User, as: "game_creator" }
        });
        const usersGames = userSpecificGames.map((game) => game.get({ plain:true }));
        console.log(usersGames)
        const user = await User.findByPk(req.session.user_id)
        const userObj = user.get({plain: true})
        const usersDisplay = {game_creator: {username: userObj.username}}
        res.status(200).render("notstarted", {
            usersDisplay,
            usersGames,
            logged_in: req.session.logged_in,
            userId: req.session.user_id
        })
    } catch (err) {
        res.status(400).json("Page not found!");
    }
});

router.get("/details/:id", checkAuthorization, async (req, res) => {
    try {
        const userSpecificGames = await Game.findByPk(req.params.id, {
            include:
                { model: User, as: "game_creator" }
        });
        const usersGames = userSpecificGames.get({ plain:true });
        console.log(usersGames)
        const user = await User.findByPk(req.session.user_id)
        const userObj = user.get({plain: true})
        const usersDisplay = {game_creator: {username: userObj.username}}
        res.status(200).render("game-details", {
            usersDisplay,
            usersGames,
            logged_in: req.session.logged_in,
            userId: req.session.user_id
        })
    } catch (err) {
        res.status(400).json("Page not found!");
    }
});

module.exports = router;
