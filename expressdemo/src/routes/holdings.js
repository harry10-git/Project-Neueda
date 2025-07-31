const { Router } = require('express');
const HoldingsController = require('../controllers/holdings');

const router = Router();
const holdingsController = new HoldingsController();

function setRoutes(app) {
    app.use('/api/holdings', router);
    router.get('/', holdingsController.getItems.bind(holdingsController));
    router.post('/', holdingsController.createItem.bind(holdingsController));
}

module.exports = { setRoutes };
