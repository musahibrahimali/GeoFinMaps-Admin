import admin from 'firebase-admin';

const serviceAccount = '../key/geofinmaps-gh-firebase-adminsdk.json';

export const verifyIdToken = (token) => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            // databaseURL: "",
        });
    }

    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
            throw error;
        });
};
