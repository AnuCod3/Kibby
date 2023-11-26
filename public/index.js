// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, get, child} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDT0ReiRbfmE1iYNiseAkExpAmNcU-jJWs",
    authDomain: "kibby-2cd8c.firebaseapp.com",
    projectId: "kibby-2cd8c",
    storageBucket: "kibby-2cd8c.appspot.com",
    messagingSenderId: "453662012145",
    appId: "1:453662012145:web:226ec559285a1fd0882f50",
    measurementId: "G-J1TMSVRZ0S",
    databaseURL: "https://kibby-2cd8c-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

function writeUserData(userId, name, email, imageUrl) { // setUserData

    const reference = ref(db, 'users/' + userId);

    set(reference, {
        email: email, username: name,  profile_picture: imageUrl
    });
}

const dbRef = ref(getDatabase());

function getUserData(userId) { // getUserData
    get(child(dbRef, `users/` + userId)).then((snapshot) => { // getData
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}


function getALlUserData() { // getAllData
    get(child(dbRef, `users/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}




/*
writeUserData("1", "Kilian", "kilian@hnbk-schule.de", "myimageurl"); // Creating Users
writeUserData("2", "Philip", "Philip@hnbk-schule.de", "myimageurl");
writeUserData("3", "Leo", "Leo@hnbk-schule.de", "myimageurl");
writeUserData("4", "Thrishan", "Thrishan@hnbk-schule.de", "myimageurl")
writeUserData("5", "Anusan", "Anusan@hnbk-schule.de", "myimageurl")
*/

//getUserData("2"); // getting certain user
//getALlUserData(); // getting every user

