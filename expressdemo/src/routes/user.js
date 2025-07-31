const { Router } = require('express');
const UserController = require('../controllers/index'); // or rename file to user.js

const router = Router();
const userController = new UserController();

function setRoutes(app) {
    app.use('/api/user', router);
    router.get('/', userController.getItems.bind(userController));
    router.post('/', userController.createItem.bind(userController));
}

module.exports = { setRoutes };
