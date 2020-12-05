import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCnaaOZY16birQUkLY1wGA-b4MxiqzOw8A",
    authDomain: "slumcart-db.firebaseapp.com",
    databaseURL: "https://slumcart-db.firebaseio.com",
    projectId: "slumcart-db",
    storageBucket: "slumcart-db.appspot.com",
    messagingSenderId: "659794215318",
    appId: "1:659794215318:web:b45f57716de7bf01ec9db7",
    measurementId: "G-F9TQYQ3GLE"
};
firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot)

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ promt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase