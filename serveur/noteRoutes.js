// Importer le module Express pour la gestion des routes
const express = require('express');

// Créer un objet Router pour définir les routes liées aux notes
const router = express.Router();

// Importer le contrôleur de notes qui gère les opérations liées aux notes
const noteController = require('./noteController');

// Définir une route pour la création d'une nouvelle note (POST /api/notes)
router.post('/notes', noteController.createNote);

// Définir une route pour la récupération de toutes les notes (GET /api/notes)
router.get('/notes', noteController.getNotes);

// Exporter l'objet Router pour pouvoir l'utiliser dans d'autres parties de l'application
module.exports = router;
