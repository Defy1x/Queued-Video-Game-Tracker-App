const router = require("express").Router();
const gameRoutes = require("./game-routes");
const userRoutes = require("./user-routes");

router.use("/user", userRoutes);
router.use("/game", gameRoutes);

module.exports = router;
