const router = require("express").Router();
const { User, Game } = require("../models");
const checkAuthorization = require("../utils/authorization");
const useRawgApi = require('../services/rawg');

// We grab only the username and comment content from this?
router.get("/", async (req, res) => {
    try {
        const gamesData = await Game.findAll({
            include: [
                {
                    model: User,
                    as: "game_creator",
                    attributes: ["username"]
                }
            ]
        });
        const games = gamesData.map((games) => games.get({ plain: true }));
        console.log(games);
        res.render("homepage", {
            games,
            logged_in: req.session.logged_in, // logged in status from the session object
            userId: req.session.user_id // user id from the session object
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// This is a placeholder, and will need the login page to be rendered.
router.get("/signin", async (req, res) => {
    try {
        res.status(200).render("signin");
    } catch (err) {
        res.status(400).json(err);
    }
});

// This is a placeholder, and will need the create account page.
router.get("/signup", async (req, res) => {
    try {
        res.status(200).render("signup");
    } catch (err) {
        res.status(500).json(err);
    }
})

// This is a placeholder, and will need the logout page to be rendered.
router.get("/signout", async (req, res) => {
    try {
        res.status(200).render("signout");
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/search-results', async (req, res) => {
  const { search } = req.query

  try {
    const { data: { results } } = await useRawgApi({
      params: { search },
      path: '/games'
    });

    console.log( results );

    res.render('search-results', {
      games: results,
      logged_in: req.session.logged_in, // logged in status from the session object
      userId: req.session.user_id // user id from the session object
    } );
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
