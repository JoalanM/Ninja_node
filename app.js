const express = require('express');
const mongoose = require('mongoose');
const Ninja = require('./src/models/ninjas'); // Assurez-vous que le chemin est correct
const connectDB = require('./src/config/db');
const ninjaRoutes = require('./src/routes/ninjaRoutes'); // Routes des ninjas

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
    await connectDB(); 
    app.listen(PORT, () => {
        console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
    });
};

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.use('/api', ninjaRoutes);



startServer();
