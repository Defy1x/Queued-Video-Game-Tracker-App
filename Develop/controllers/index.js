const router = require("express").Router();
const checkAuthorization = require('../utils/authorization');

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const gameRoutes = require("./game-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/game", gameRoutes);

module.exports = router;
