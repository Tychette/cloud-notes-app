const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cloud-notes', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
mongoose.connection.once('open', () => console.log('Connecté à MongoDB'));
