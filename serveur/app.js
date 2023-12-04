function addNote() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (!title || !content) {
    alert('Le titre et le contenu de la note sont requis.');
    return;
  }

  fetch('http://localhost:3000/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Note ajoutée avec succès:', data);
      getNotes();  // Appel à la fonction getNotes après l'ajout d'une note
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout de la note:', error);
    });
}

function getNotes() {
  fetch('http://localhost:3000/api/notes')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut: ${response.status}`);
      }
      return response.json();
    })
    .then(notes => {
      displayNotes(notes);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des notes:', error);
    });
}

function displayNotes(notes) {
  const noteList = document.getElementById('noteList');

  noteList.innerHTML = '';

  notes.forEach(note => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${note.title}</strong>: ${note.content}`;
    noteList.appendChild(listItem);
  });
}

window.onload = getNotes;  // Appel à la fonction getNotes lorsque la page se charge
