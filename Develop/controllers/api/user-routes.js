const { User, Game } = require("../../models");
const router = require("express").Router();
const checkAuthorization = require("../../utils/authorization");

router.get("/", async (req, res) => {
    try {
        const rawUserData = await User.findAll();
        const userData = rawUserData.map((user) => user.get({ plain: true }));
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
  try {
    const rawUserData = await User.findByPk(req.params.id);
    if (!rawUserData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(200).json(rawUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/", async (req, res) => {
    try {
        const newUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(newUserData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Make sure to attach the user info the to req.body when you do this post.
router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json("Incorrect email or password, please try again.");
            return;
        }

        const passwordData = await userData.validatePassword(req.body.password);

        if (!passwordData) {
            res.status(400).json("Incorrect email or password, please try again.");
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({ user: userData, message: 'You are now logged in!' });
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// When the user logs out, end the session
router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedUserData = await User.update(
          {
            email: req.body.email,
            password: req.body.password
          },
          {
            where: {
              id: req.params.id
            },
            individualHooks: true
          }
        )
        res.status(200).json(updatedUserData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await User.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
