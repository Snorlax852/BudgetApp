import React from "react";

var firebase = require("firebase/app");


// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");



var firebaseConfig = {
    apiKey: "AIzaSyD4wEwvP9eDP81nt-GLovYpoRzHyThbzCs",
    authDomain: "budget-app-2e9ec.firebaseapp.com",
    databaseURL: "https://budget-app-2e9ec.firebaseio.com",
    projectId: "budget-app-2e9ec",
    storageBucket: "budget-app-2e9ec.appspot.com",
    messagingSenderId: "961406783246",
    appId: "1:961406783246:web:2d958795d9dfea449ad15f",
    measurementId: "G-X15FXNKZV1"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)   
};
var db = firebase.firestore();



export function listData() {
    let data = [];
    db.collection("transactions").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            data.push(doc.data());
        });
    });
    console.log("hi", data)
    return data;
    
}

export function deleteData() {

}

export function createData(description, cost) {
    db.collection("transactions").add({
        description: description,
        cost: cost,
        checked: false
    })

}

export function updateData() {

}


