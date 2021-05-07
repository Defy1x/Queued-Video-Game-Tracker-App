const router = require("express").Router();
const checkAuthorization = require('../utils/authorization');

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const gameRoutes = require("./game-routes");

router.use("/", homeRoutes);
router.use("/game", gameRoutes);
router.use("/api", apiRoutes);

module.exports = router;
