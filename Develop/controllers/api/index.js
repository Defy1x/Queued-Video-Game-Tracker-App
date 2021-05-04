const router = require("express").Router();
const gameRoutes = require("./game-routes");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
router.use("/game", gameRoutes);

module.exports = router;
