import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../actions/noteActions';

const NoteForm = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote(content));
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        cols="50"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Saisissez votre note..."
      />
      <button type="submit">Ajouter une note</button>
    </form>
  );
};

export default NoteForm;
