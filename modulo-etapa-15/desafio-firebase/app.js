import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
  setDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA9dnzA6aCzvAat6cOJR6Yh-d5NTVRjVZo",
  authDomain: "fir-auth-99a23.firebaseapp.com",
  projectId: "fir-auth-99a23",
  storageBucket: "fir-auth-99a23.appspot.com",
  messagingSenderId: "567218604075",
  appId: "1:567218604075:web:fe784788f896604d3b426e",
  measurementId: "G-LJE3LCFZ9E",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const collectionPhrases = collection(db, "phrases");

const addPhrase = async (e, user) => {
  e.preventDefault();

  try {
    await addDoc(collectionPhrases, {
      movieTitle: DOMPurify.sanitize(e.target.title.value),
      moviePhrase: DOMPurify.sanitize(e.target.phrase.value),
      functionCollaborator: DOMPurify.sanitize(e.target.function.value),
      userId: DOMPurify.sanitize(user.uid),
    });

    e.target.reset();

    const modalAddPhrases = document.querySelector('[data-modal="add-phrase"]');
    M.Modal.getInstance(modalAddPhrases).close();
  } catch (error) {
    console.log("não foi possivel add doc", error);
  }
};

const initCollapsibes = (collapsible) => M.Collapsible.init(collapsible);

const login = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  } catch (error) {}
  console.log(error);
};

const logout = async (unsubscribe) => {
  try {
    await signOut(auth);
    unsubscribe();
  } catch (error) {
    console.log("error", error);
  }
};

const handleAuthStateChanged = async (user) => {
  console.log(user);
  try {
    const result = await getRedirectResult(auth);
    console.log("result", result);
  } catch (error) {
    console.log("redirect error:", error);
  }
  console.log(user);
  const lis = [...document.querySelector('[data-js="nav-ul"]').children];

  lis.forEach((li) => {
    const liShouldBeVisible = li.dataset.js.includes(
      user ? "logged-in" : "logged-out"
    );
    if (liShouldBeVisible) {
      li.classList.remove("hide");
      return;
    }
    li.classList.add("hide");
  });

  const loginMessageExists = document.querySelector(
    '[data-js="login-message"]'
  );
  loginMessageExists?.remove();

  const formAddPhrase = document.querySelector('[data-js="add-phrase-form"]');
  const phrasesList = document.querySelector('[data-js="phrases-list"]');
  const buttonGoogle = document.querySelector('[data-js="button-google"]');
  const linkLogout = document.querySelector('[data-js="logout"]');
  const accountDetailsContainer = document.querySelector(
    '[data-js="account-details"]'
  );
  const imageUserUrl = document.querySelector('[data-js="image-url"]');
  const paragraphName = document.querySelector('[data-js="paragraph-name"]');
  const paragraphEmail = document.querySelector('[data-js="paragraph-email"]');

  if (!user) {
    const phrasesContainer = document.querySelector(
      '[data-js="phrases-container"]'
    );
    const loginMessage = document.createElement("h5");

    loginMessage.textContent = "Faça login para continuar";
    loginMessage.classList.add("center-align", "black-text");
    loginMessage.setAttribute("data-js", "login-message");
    phrasesContainer.append(loginMessage);

    formAddPhrase.onsubmit = null;
    linkLogout.onclick = null;
    buttonGoogle.addEventListener("click", login);
    phrasesList.innerHTML = "";
    accountDetailsContainer.innerHTML = "";
    imageUserUrl.src = "";

    return;
  }

  try {
    const userDocRef = doc(db, "users", user.uid);
    const docSnapshot = await getDoc(userDocRef);

    if (!docSnapshot.exists()) {
      await setDoc(userDocRef, {
        name: DOMPurify.sanitize(user.displayName),
        email: DOMPurify.sanitize(user.email),
        userId: DOMPurify.sanitize(user.uid),
      });
    }
  } catch (error) {
    console.log(error);
  }

  buttonGoogle.removeEventListener("click", login);
  formAddPhrase.onsubmit = (e) => addPhrase(e, user);

  const queryPhrases = query(
    collectionPhrases,
    where("userId", "==", user.uid)
  );

  const unsubscribe = onSnapshot(queryPhrases, (snapshot) => {
    const documentFragment = document.createDocumentFragment();

    snapshot.docChanges().forEach((docChange) => {
      const { movieTitle, moviePhrase, functionCollaborator } =
        docChange.doc.data();

      let table = document.createElement("table");
      let tbody = document.createElement("tbody");

      table.appendChild(tbody);

      let liPhrase = document.createElement("tr");

      let movieTitleContainer = document.createElement("td");
      movieTitleContainer.textContent = DOMPurify.sanitize(movieTitle);
      movieTitleContainer.setAttribute("class", "container-table");

      console.log(movieTitleContainer);

      let phraseContainer = document.createElement("td");
      phraseContainer.setAttribute("class", "container-table");
      phraseContainer.textContent = DOMPurify.sanitize(moviePhrase);
      console.log(phraseContainer);

      let functionContainer = document.createElement("td");
      console.log(functionContainer);
      functionContainer.textContent = DOMPurify.sanitize(functionCollaborator);
      functionContainer.setAttribute("class", "container-table");

      liPhrase.appendChild(movieTitleContainer);
      liPhrase.appendChild(phraseContainer);
      liPhrase.appendChild(functionContainer);

      liPhrase.append(movieTitleContainer, phraseContainer, functionContainer);
      documentFragment.append(liPhrase);
    });

    phrasesList.append(documentFragment);
  });

  linkLogout.onclick = () => logout(unsubscribe);
  initCollapsibes(phrasesList);

  imageUserUrl.src = DOMPurify.sanitize(`${user.photoURL}`);
  paragraphEmail.textContent = DOMPurify.sanitize(`${user.email} `);
  paragraphName.textContent = DOMPurify.sanitize(`${user.displayName} `);

  accountDetailsContainer.append(paragraphName);
};

const initModals = () => {
  const modals = document.querySelectorAll('[data-js="modal"]');
  M.Modal.init(modals);
};

const dropdown = () => {
  const dropdownModal = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(dropdownModal);
};

dropdown();
onAuthStateChanged(auth, handleAuthStateChanged);

initModals();
