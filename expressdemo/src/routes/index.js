const { Router } = require('express');
const IndexController = require('../controllers');

const router = Router();
const indexController = new IndexController();

function setRoutes(app) {
    app.use('/api/user', router);
    router.get('/', indexController.getItems.bind(indexController));
    router.post('/', indexController.createItem.bind(indexController));
}

module.exports = { setRoutes };