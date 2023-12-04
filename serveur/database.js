const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Client:uZKWfX6J0aejgnst@atlascluster.2bzkbwe.mongodb.net/NoteClient';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB:'));
mongoose.connection.once('open', () => console.log('Connecté à MongoDB'));
