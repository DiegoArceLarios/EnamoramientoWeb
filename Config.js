import firebase from 'firebase';

const firebaseConfig = { 
    apiKey: "AIzaSyD27obSDA4m_HjlZzcbCZp24h1jzajPM_E", 
    authDomain: "recetario-de-diego.firebaseapp.com", 
    databaseURL: "https://recetario-de-diego-default-rtdb.firebaseio.com",
    projectId: "recetario-de-diego", 
    storageBucket: "recetario-de-diego.appspot.com", 
    messagingSenderId: "229062245799",
    appId: "1:229062245799:web:495fd83290abcc7d508a82"
};

firebase.initializeApp(firebaseConfig);
export default firebase.database()

