const { Router } = require('express');
const StocksController = require('../controllers/stocks');

const router = Router();
const stocksController = new StocksController();

function setRoutes(app) {
    app.use('/api/stocks', router);
    router.get('/', stocksController.getItems.bind(stocksController));
    router.post('/', stocksController.createItem.bind(stocksController));
}

module.exports = { setRoutes };
