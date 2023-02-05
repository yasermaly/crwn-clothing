import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDYy3TsSdRoyVurhrEqjcspix9mA_hRjeA",
  authDomain: "crwn-clothing-db-cbf82.firebaseapp.com",
  projectId: "crwn-clothing-db-cbf82",
  storageBucket: "crwn-clothing-db-cbf82.appspot.com",
  messagingSenderId: "292462083209",
  appId: "1:292462083209:web:f92a2712431153c3061a58",
  measurementId: "G-4JX0SWQB66",
};


const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);