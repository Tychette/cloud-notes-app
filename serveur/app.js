// App de connexion entre l'interface utilisateur et l'application Node.js

// Fonction pour ajouter une nouvelle note
function addNote() {
  // Récupérer les valeurs du titre et du contenu depuis le formulaire
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // Vérifier si le titre et le contenu sont fournis
  if (!title || !content) {
    alert('Le titre et le contenu de la note sont requis.');
    return;
  }

  // Remplacez l'URL par celle de votre API Node.js
  fetch('http://localhost:3000/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  })
    .then(response => response.json())
    .then(data => {
      // Afficher un message de succès dans la console
      console.log('Note ajoutée avec succès:', data);
      
      // Actualiser la liste des notes après l'ajout d'une nouvelle note
      getNotes();

      // Vider les champs de saisie
      clearInputFields();
    })
    .catch(error => {
      // Gérer les erreurs lors de l'ajout de la note
      console.error('Erreur lors de l\'ajout de la note:', error);
    });
}

// Fonction pour vider les champs de saisie
function clearInputFields() {
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
}

// Fonction pour récupérer la liste des notes depuis l'API Node.js
function getNotes() {
  // Remplacez l'URL par celle de votre API Node.js
  fetch('http://localhost:3000/api/notes')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut: ${response.status}`);
      }
      return response.json();
    })
    .then(notes => {
      // Afficher les notes dans l'interface utilisateur
      displayNotes(notes);
    })
    .catch(error => {
      // Gérer les erreurs lors de la récupération des notes
      console.error('Erreur lors de la récupération des notes:', error);
    });
}

// Fonction pour afficher les notes dans l'interface utilisateur
function displayNotes(notes) {
  // Sélectionner l'élément HTML où afficher la liste des notes
  const noteList = document.getElementById('noteList');

  // Effacer le contenu précédent de la liste
  noteList.innerHTML = '';

  // Parcourir chaque note et créer un élément de liste pour l'affichage
  notes.forEach(note => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${note.title}</strong>: ${note.content}`;
    noteList.appendChild(listItem);
  });
}

// Appeler la fonction getNotes lorsque la page se charge
window.onload = getNotes;
