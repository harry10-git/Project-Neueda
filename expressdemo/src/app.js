const express = require('express');
const { connectToDatabase } = require('./config/database');
//const cors = require('cors');
const { setRoutes } = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
//app.use(cors());

app.use(express.json());

connectToDatabase()
    .then(() => {
        console.log('Connected to the database');
        setRoutes(app);
        
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection failed:', err);
    });