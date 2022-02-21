// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTMXqjRKlQVcA9OVaqdIAmxYM1lV0rUvo",
  authDomain: "arrival-approval.firebaseapp.com",
  projectId: "arrival-approval",
  storageBucket: "arrival-approval.appspot.com",
  messagingSenderId: "452255985774",
  appId: "1:452255985774:web:de046de284a347a7cfb67f",
  measurementId: "G-K9NBGD3PFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// function getJSONClientsTable() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       var clients = JSON.parse(xhttp.responseText);
//       var table = '<table style="border:1px solid blue">';
//       for (i = 0; i < clients.length; i++) {
//         table += "<tr>";
//         table += "<td>" + clients[i].id + "</td>";
//         table += "<td>" + clients[i].first_name + "</td>";
//         table += "<td>" + clients[i].last_name + "</td>";
//         table += "<td>" + clients[i].email + "</td>";
//         table += "</tr>";
//       }
//       table += "</table>";
//       document.getElementById("clientstable").innerHTML = table;
//     }
//   };

//   xhttp.open("GET", "data/clients.json", true);
//   xhttp.send();
// }
