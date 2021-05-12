const router = require("express").Router();
const checkAuthorization = require('../utils/authorization');

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const libraryRoutes = require("./library-routes");

router.use("/", homeRoutes);
router.use("/library", checkAuthorization, libraryRoutes);
router.use("/api", apiRoutes);

module.exports = router;
