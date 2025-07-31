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
            const [rows] = await this.db.query('SELECT * FROM stocks');
            res.json(rows);
        } catch (error) {
            console.error('Error retrieving user:', error);
            res.status(500).json({ message: "Error retrieving user" });
        }
    }

    async createItem(req, res) {
        const { stock_id, stock_name , curr_price , aval_quanty } = req.body;
        console.log('Creating item with data:', { stock_id, stock_name , curr_price , aval_quanty });
        try {
            await this.db.query('INSERT INTO stocks (stock_id, stock_name , curr_price , aval_quanty) VALUES (?, ?, ?,?)', [stock_id, stock_name , curr_price , aval_quanty]);
        } catch (error) {
            console.error('Error creating item:', error);
            return res.status(500).json({ message: "Error creating item" });
        }
        res.json({ message: "Item created successfully" });
    }
}

module.exports = IndexController;