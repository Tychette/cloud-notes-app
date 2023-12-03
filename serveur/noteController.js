// Contient la logique métier pour les notes.

const Note = require('./noteModel');

exports.createNote = async (req, res) => {
  try {
    const { content } = req.body;
    const newNote = new Note({ content });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la création de la note');
  }
};
