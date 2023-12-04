// Importer le modèle de note défini dans "noteModel.js"
const Note = require('./noteModel');

// Fonction pour créer une nouvelle note
exports.createNote = async (req, res) => {
  try {
    // Récupérer le titre et le contenu de la note depuis le corps de la requête
    const { title, content } = req.body;

    // Vérifier si le titre et le contenu sont fournis
    if (!title || !content) {
      return res.status(400).json({ message: "Le titre et le contenu de la note sont requis." });
    }

    // Créer une nouvelle instance de la note en utilisant le modèle
    const newNote = new Note({ title, content });

    // Enregistrer la nouvelle note dans la base de données
    await newNote.save();

    // Répondre avec le statut 201 (Créé) et renvoyer les détails de la nouvelle note
    res.status(201).json(newNote);
  } catch (error) {
    // Gérer les erreurs lors de la création de la note
    console.error(error);
    res.status(500).send('Erreur lors de la création de la note');
  }
};

// Fonction pour récupérer toutes les notes
exports.getNotes = async (req, res) => {
  try {
    // Récupérer toutes les notes depuis la base de données en utilisant le modèle
    const notes = await Note.find();

    // Répondre avec le statut 200 (OK) et renvoyer la liste des notes
    res.status(200).json(notes);
  } catch (error) {
    // Gérer les erreurs lors de la récupération des notes
    console.error(error);
    res.status(500).send('Erreur lors de la récupération des notes');
  }
};
