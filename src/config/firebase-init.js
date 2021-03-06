import * as firebase from 'firebase';
import * as c from "./firebase-constants";

// Initialize Firebase
const config = {
    apiKey: c.FIREBASE_API_KEY,
    authDomain: c.FIREBASE_AUTH_DOMAIN,
    credentials: c.FIREBASE_SERVICE_ACCOUNT,
    databaseURL: c.FIREBASE_DATABASE_URL,
    projectId: c.FIREBASE_PROJECT_ID,
    storageBucket: c.FIREBASE_STORAGE_BUCKET,
    //credential: admin.credential.cert(serviceAccount),

    messagingSenderId: c.FIREBASE_MESSAGING_SENDER_ID
};

var app = firebase.initializeApp(config);

//export const database = firebase.database();
const firestore = firebase.firestore(app);

//config database date
const settings = { /* your settings... */
    timestampsInSnapshots: true
};
firestore.settings(settings);
export const database = firestore;
export const auth = firebase.auth();
//export const provider = new firebase.auth.FacebookAuthProvider();
//export const storage = firebase.storage();

