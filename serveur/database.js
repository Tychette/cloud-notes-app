// Connexion à MongoDB

// Importer le module mongoose, un ODM pour MongoDB
const mongoose = require('mongoose');

// Chaîne de connexion à la base de données MongoDB
const connectionString = 'mongodb+srv://Client:uZKWfX6J0aejgnst@atlascluster.2bzkbwe.mongodb.net/NoteClient';

// Établir la connexion à MongoDB en utilisant la chaîne de connexion
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// Gérer les erreurs de connexion à MongoDB
mongoose.connection.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB:'));

// Effectuer une action une fois la connexion à MongoDB établie avec succès
mongoose.connection.once('open', () => console.log('Connecté à MongoDB'));
