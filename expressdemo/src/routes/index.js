const { setRoutes: setUserRoutes } = require('./user');
const { setRoutes: setStocksRoutes } = require('./stocks');
const { setRoutes: setHoldingsRoutes } = require('./holdings');

function setRoutes(app) {
    // Optional base route
    app.get('/', (req, res) => res.send('Welcome to the Projects API'));

    // Attach each module's routes
    setUserRoutes(app);
    setStocksRoutes(app);
    setHoldingsRoutes(app);
}

module.exports = { setRoutes };

