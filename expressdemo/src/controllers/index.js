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
            const [rows] = await this.db.query('SELECT * FROM user');
            res.json(rows);
        } catch (error) {
            console.error('Error retrieving user:', error);
            res.status(500).json({ message: "Error retrieving user" });
        }
    }

    async createItem(req, res) {
        const { user_id,user_name,email,wallet_cash } = req.body;
        console.log('Creating item with data:', { user_id,user_name,email,wallet_cash });
        try {
            await this.db.query('INSERT INTO user (user_id,user_name,email,wallet_cash) VALUES (?, ?, ?,?)', [user_id,user_name,email,wallet_cash]);
        } catch (error) {
            console.error('Error creating item:', error);
            return res.status(500).json({ message: "Error creating item" });
        }
        res.json({ message: "Item created successfully" });
    }
}

module.exports = IndexController;