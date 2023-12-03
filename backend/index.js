const express = require('express');
const cors = require('cors');
const apiRoutes = require('./api');
require('./database'); // Connecte à la base de données

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
