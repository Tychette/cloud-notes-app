const express = require('express');
const bodyParser = require('body-parser');
const noteRoutes = require('./noteRoutes');
const databaseConfig = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', noteRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});