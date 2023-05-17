import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBjmqmMyx9VYudVwZP_-ahnfBPy1Y8o2Bo",
  authDomain: "testing-firebase-f95e6.firebaseapp.com",
  projectId: "testing-firebase-f95e6",
  storageBucket: "testing-firebase-f95e6.appspot.com",
  messagingSenderId: "95897947676",
  appId: "1:95897947676:web:cd8721b37d069d71e899d9",
  measurementId: "G-E3DSS0H3C6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionGames = collection(db, "games");

const log = (...value) => console.log(...value);

const formAddGame = document.querySelector('[data-js="add-game-form"]');
const gamesList = document.querySelector('[data-js="games-list"]');
const buttonUNSub = document.querySelector('[data-js="unsub"]');

const DateTimeFormat = (createdAt) =>
  new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(createdAt.toDate());

const sanitize = (string) => DOMPurify.sanitize(string);

const renderGames = (docChange) => {
  const [id, { title, developerBy, createdAt }] = [
    docChange.doc.id,
    docChange.doc.data(),
  ];

  const liGame = document.createElement("li");
  liGame.setAttribute("data-id", id);
  liGame.setAttribute("class", "my-4");

  const h5 = document.createElement("h5");
  h5.textContent = sanitize(title);

  const ul = document.createElement("ul");

  const liDeveloper = document.createElement("li");
  liDeveloper.textContent = `Desenvolvido por ${sanitize(developerBy)}`;

  if (createdAt) {
    const liDate = document.createElement("li");
    liDate.textContent = `Adicionado no banco em ${DateTimeFormat(createdAt)}`;
    ul.append(liDate);
  }

  const button = document.createElement("button");
  button.textContent = "Remover";
  button.setAttribute("data-remove", id);
  button.setAttribute("class", "btn btn-danger btn-sm");

  ul.append(liDeveloper);

  ul.append(liDeveloper);
  liGame.append(h5, ul, button);
  gamesList.append(liGame);
};

const renderGamesList = onSnapshot(collectionGames, (querySnapshot) => {
  if (querySnapshot.metadata.hasPendingWrites) {
    return;
  }
  querySnapshot.docChanges().forEach((docChange) => {
    if (docChange.type === "removed") {
      const games = document.querySelector(`[data-id="${docChange.doc.id}"]`);
      games.remove();
      return;
    }
    renderGames(docChange);
  });
});

const to = (promisse) =>
  promisse.then((result) => [null, result]).catch((error) => [error]);

const addGame = async (e) => {
  e.preventDefault();
  const [error, doc] = await to(
    addDoc(collectionGames, {
      title: sanitize(e.target.title.value),
      developerBy: sanitize(e.target.developer.value),
      createdAt: serverTimestamp(),
    })
  );

  if (error) {
    return log(error);
  }
  e.target.reset();
  e.target.title.focus();
};

const deleteGame = async (e) => {
  const removeGameId = e.target.dataset.remove;
  if (removeGameId) {
    await deleteDoc(doc(db, "games", removeGameId));
  }
};

formAddGame.addEventListener("submit", addGame);

gamesList.addEventListener("click", deleteGame);

buttonUNSub.addEventListener("click", renderGamesList);
