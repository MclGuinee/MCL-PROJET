import {
    auth,
    database
} from "../config/firebase-init";

//Register the user using email and password
export function register(data) {
    return new Promise((resolve, reject) => {
        const {
            email,
            password,
            firstname,
            lastname,
            mobile
        } = data;
        auth.createUserWithEmailAndPassword(email, password)
            .then((resp) => {
                var user = {
                    uid: resp.user.uid,
                    firstname,
                    lastname,
                    mobile,
                    email
                };

                createUser(user);
                resolve(user);

            })
            .catch((error) => {
                reject(error);
            });
    });
}

//Create the user in database 
export function createUser(user) {
    authenticate(); //connecte mcl to firebase with API KEY (without password)
    database.collection('users').doc(user.uid).set({
            "email": user.email,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "mobile": user.mobile
        })
        .then(user => console.log("user created"))
        .catch(error => console.error(error));
}


//Connect mcl to firebase with API Key
export function authenticate() {
    auth.signInAnonymously().catch(function (error) {
        console.error(error.message, error);
    });
}


//Sign the user in with their email and password
export function login(data) {
    return new Promise((resolve, reject) => {
        const {
            email,
            password
        } = data;
        auth.signInWithEmailAndPassword(email, password)
            .then((resp) => {
                console.log('login' + resp.user);
                resolve(getUserProfile(resp.user.uid));
            })
            .catch((error) => {
                console.log('login' + error);
                reject(error);

            });
    });
}

//Get the current signed user
export function getCurrentSignedInUser() {
    return auth.currentUser;
}

/**
 * Find user profile in database
 */
export function getUserProfile(useruid) {
    const userRef = database.collection('users').doc(useruid).get()
        .then(user => {
            if (user.exists) {
                var userData = user.data();
                return {
                    "useruid": user.uid,
                    "email": userData.email,
                    "firstname": userData.firstname,
                    "lastname": userData.lastname,
                    "mobile": userData.mobile
                };
            }
        })
        .catch(error => console.error(error));

}

/**
 * Send email vérification email
 */
export function sendEmailVerification() {
    var user = auth.currentUser;

    user.sendEmailVerification().then(function () {
        Console.log("Email sent.");
    }).catch(function (error) {
        Console.error("An error happened.");
    });

}

//Updade Password Reset Email
export function updatePassword(newPassword) {

    var user = auth.currentUser;

    user.updatePassword(newPassword).then(function () {
        console.log("Update successful.");
    }).catch(function (error) {
        console.error("An error happened.");
    });
}

//Send Password Reset Email
export function sendPasswordResetEmail(emailAddress) {

    auth.sendPasswordResetEmail(emailAddress).then(function () {
        console.log("Email sent.");
    }).catch(function (error) {
        console.error("An error happened.");
    });

}

export function signOut() {
    auth.signOut()
        .catch((error) => {
            if (console.error("Signout error :,", error));
        });
}