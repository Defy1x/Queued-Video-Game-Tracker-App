const router = require("express").Router();
const { User, Game } = require("../models");
const checkAuthorization = require("../utils/authorization");
const useRawgApi = require('../services/rawg');


router.get("/", checkAuthorization, async (req, res) => {

      // try {
      //     const userSpecificGames = await Game.findByPk(req.params.id, {
      //         include:
      //             { model: User, as: "game_creator" }
      //     });
      //     const usersGames = userSpecificGames.get({ plain:true });
      //     console.log(usersGames)
      //     res.status(200).render("game-details", {
      //         usersGames,
      //         logged_in: req.session.logged_in,
      //         userId: req.session.user_id
      //     })
      // } catch (err) {
      //     res.status(400).json("Page not found!");
      // }


//code below this line works
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
        console.log("I am here in" + JSON.stringify(games));
        console.log("Session here" + JSON.stringify(req.session));
        res.render("homepage", {
            games,
            logged_in: req.session.logged_in, // logged in status from the session object
            userId: req.session.user_id, // user id from the session object
            userName: req.session.username
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

//end working code

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

router.get('/search-results', checkAuthorization, async (req, res) => {
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

router.get('/games/:id', checkAuthorization, async (req, res) => {
  const { id } = req.params

  try {
    const results = await useRawgApi({
      path: `/games/${id}`
    });

    console.log( results );

    res.render('search-details', {
      game: results.data,
      logged_in: req.session.logged_in, // logged in status from the session object
      userId: req.session.user_id // user id from the session object
    } );
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
