const mysql = require('mysql2/promise');
const { connectToDatabase } = require('../config/database');

class IndexController {
    constructor() {
        this.initDB();
    }

    async initDB() {
        this.db = await connectToDatabase();
        console.log('Database connected successfully');
    }

    async getItems(req, res) {
        try {
            const [rows] = await this.db.query('SELECT * FROM holdings');
            res.json(rows);
        } catch (error) {
            console.error('Error retrieving user:', error);
            res.status(500).json({ message: "Error retrieving user" });
        }
    }

    async createItem(req, res) {
        const { user_id  , stock_id,holding_quantity , buying_price, buy_datetime } = req.body;
        console.log('Creating item with data:', { user_id, stock_id,holding_quantity , buying_price, buy_datetime });
        try {
            await this.db.query('INSERT INTO holdings (user_id, stock_id,holding_quantity , buying_price, buy_datetime) VALUES (?, ?, ?,?,?)', [user_id, stock_id,holding_quantity , buying_price, buy_datetime]);
        } catch (error) {
            console.error('Error creating item:', error);
            return res.status(500).json({ message: "Error creating item" });
        }
        res.json({ message: "Item created successfully" });
    }
}

module.exports = IndexController;