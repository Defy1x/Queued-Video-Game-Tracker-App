const router = require("express").Router();
const gameRoutes = require("./game-routes");
const userRoutes = require("./user-routes");
// const rawgRoutes = require("./rawg-routes");

router.use("/user", userRoutes);
router.use("/game", gameRoutes);
// router.use("/rawg", rawgRoutes);

module.exports = router;
