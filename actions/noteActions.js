import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Utilisez le port de votre backend

export const createNote = (content) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/notes`, { content });
    dispatch({ type: 'ADD_NOTE', payload: response.data });
  } catch (error) {
    console.error('Erreur lors de la création de la note :', error);
  }
};

export const getAllNotes = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/notes`);
    dispatch({ type: 'SET_NOTES', payload: response.data });
  } catch (error) {
    console.error('Erreur lors de la récupération des notes :', error);
  }
};
