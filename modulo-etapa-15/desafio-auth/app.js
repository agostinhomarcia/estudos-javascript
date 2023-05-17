import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {getFirestore, collection, doc, getDoc, setDoc, query, where, addDoc, onSnapshot} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyChq9TqyCAmOaCCc7YyQddJFii52AAYPxE",
  authDomain: "fir-authentication-f606d.firebaseapp.com",
  projectId: "fir-authentication-f606d",
  storageBucket: "fir-authentication-f606d.appspot.com",
  messagingSenderId: "461651511539",
  appId: "1:461651511539:web:277088b705b8cbc8cfcf86",
  measurementId: "G-92BKPSFNRG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const collectionPhrases = collection(db, 'phrases')


const addPhrase = async (event, user) =>{
  event.preventDefault();

  try {
  await addDoc(collectionPhrases, {
      movieTitle:DOMPurify.sanitize(event.target.title.value), 
      phrase: DOMPurify.sanitize(event.target.phrase.value),
      userId: DOMPurify.sanitize(user.uid)
    })

    event.target.reset()

    const modalAddPhrase = document.querySelector('[data-modal="add-phrase"]')
    M.Modal.getInstance(modalAddPhrase).close()
  } catch (error) {
    console.log('problema na adição do document:', error)
  }

}

const initCollapsible = (collapsibles) => M.Collapsible.init(collapsibles)


const handleAuthStateChanged = async (user) => {
  try {
  const result =  await getRedirectResult(auth)
  console.log('result:', result)
  } catch (error) {
    console.log('erro em getRedirectResult:', error)
  }
  
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

  
  const loginMessageExists = document.querySelector('[data-js="login-message"]')
  loginMessageExists?.remove()
  
  const formAddPhrase= document.querySelector('[data-js="add-phrase-form"]')
  const phrasesList = document.querySelector('[data-js="phrases-list"]')
  const buttonGoogle = document.querySelector('[data-js="button-google"]');
  const linkLogout = document.querySelector('[data-js="logout"]')
  const accountDetailsContainer = document.querySelector('[data-js="account-details"]')
  const accountDetails = document.createElement('p')


if (!user) {

    const phrasesContainer = document.querySelector(
  '[data-js="phrases-container"]');
    const loginMessage = document.createElement("h5");

    loginMessage.textContent = "Faça login para ver as frases";
    loginMessage.classList.add("center-align", "white-text");
    loginMessage.setAttribute('data-js', 'login-message')
    phrasesContainer.append(loginMessage);

    formAddPhrase.onsubmit = null
    linkLogout.onclick = null
    buttonGoogle.addEventListener("click", login);
    phrasesList.innerHTML = ''
    accountDetailsContainer.innerHTML = ''
    return
  }
  try {
    const userDocRef = doc(db, 'users', user.uid)
    const docSnapshot = await getDoc(userDocRef)

    if(!docSnapshot.exists()){
      await setDoc(userDocRef,{
        name: DOMPurify.sanitize(user.displayName),
        email: DOMPurify.sanitize(user.email),
        userId: DOMPurify.sanitize(user.uid),
      })
    }

  } catch (error) {
    console.log('erro ao tentar registrar usuário:', error)
  }

  buttonGoogle.removeEventListener('click', login)
  formAddPhrase.onsubmit = event => addPhrase(event, user)

  //query: consultar  where: onde

const queryPhrases =   query(collectionPhrases, where('userId', '==', user.uid))

 
  const unsubscribe =  onSnapshot(queryPhrases, snapshot =>{
    const documentFragment = document.createDocumentFragment()

    snapshot.docChanges().forEach(docChange =>{
      const liPhrase = document.createElement('li')
      const movieTitleContainer = document.createElement('div')
      const phraseContainer = document.createElement('div')
      const {movieTitle, phrase} =  docChange.doc.data()


      movieTitleContainer.textContent = DOMPurify.sanitize(movieTitle)
      phraseContainer.textContent = DOMPurify.sanitize(phrase)
      movieTitleContainer.setAttribute('class', 'collapsible-header blue-grey-text text-lighten-5 blue-grey darken-4')
      phraseContainer.setAttribute('class', 'collapsible-body blue-grey-text text-lighten-5 blue-grey darken-3')

      liPhrase.append(movieTitleContainer,phraseContainer)
      documentFragment.append(liPhrase)

    })
    phrasesList.append(documentFragment)
  })
  linkLogout.onclick =  () => logout(unsubscribe)
  initCollapsible(phrasesList)
  accountDetails.textContent = DOMPurify.sanitize(`${user.displayName} | ${user.email}`)
  accountDetailsContainer.append(accountDetails)

};
const initModals = () => {
  const modals = document.querySelectorAll('[data-js="modal"]');
  M.Modal.init(modals);
};

const login = async () => {
  try {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)

  } catch (error) {
    console.log("login error:", error);
  }
};

const logout = async(unsubscribe)=>{
  try {
    await signOut(auth)
    unsubscribe()
    console.log('usuário foi deslogado')
  } catch (error) {
    console.log('logout error:', error)
  }
}

onAuthStateChanged(auth, handleAuthStateChanged);

initModals();





