// Importer le module mongoose pour la gestion de la base de données MongoDB
const mongoose = require('mongoose');

// Définir le schéma pour les objets de note
const noteSchema = new mongoose.Schema({
  // Le titre de la note est une chaîne de caractères obligatoire
  title: { type: String, required: true },
  
  // Le contenu de la note est une chaîne de caractères obligatoire
  content: { type: String, required: true },
  
  // La date de création de la note, par défaut, est la date actuelle
  date: { type: Date, default: Date.now }
});

// Créer un modèle Mongoose basé sur le schéma défini
const Note = mongoose.model('Note', noteSchema);

// Exporter le modèle pour pouvoir l'utiliser dans d'autres parties de l'application
module.exports = Note;
