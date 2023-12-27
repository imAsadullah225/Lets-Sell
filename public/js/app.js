var firebaseConfig = {
    apiKey: "<YOUR-API-KEY-HERE>",
    authDomain: "<YOUR-AUTH-DOMAIN-HERE>",
    databaseURL: "<YOUR-DATABASE-URL-HERE>",
    projectId: "<YOUR-PROJECT-ID-HERE>",
    storageBucket: "<YOUR-STORAGE-BUCKET-HERE>",
    messagingSenderId: "<YOUR-MESSAGING-ID-HERE>",
    appId: "<YOUR-APP-ID-HERE>"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const messaging = firebase.messaging();
