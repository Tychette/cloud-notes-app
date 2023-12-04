// Importer les modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Importer les routes pour la gestion des notes
const noteRoutes = require('./noteRoutes');

// Importer la configuration de la base de données (assurez-vous qu'elle est définie dans le fichier "database.js")
const databaseConfig = require('./database');

// Créer une instance d'Express
const app = express();

// Définir le port sur lequel le serveur écoutera (utilisez le port défini dans les variables d'environnement ou le port 3000 par défaut)
const PORT = process.env.PORT || 3000;

// Middleware

// Activer CORS pour permettre les requêtes depuis des domaines différents
app.use(cors());

// Utiliser le middleware body-parser pour traiter les données JSON dans les requêtes
app.use(bodyParser.json());

// Servir les fichiers statiques depuis le dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Définir la route principale pour servir le fichier HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Utiliser les routes définies dans "noteRoutes" pour les requêtes commençant par "/api"
app.use('/api', noteRoutes);

// Lancer le serveur pour écouter les connexions entrantes
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
