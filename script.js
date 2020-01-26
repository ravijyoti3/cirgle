const form = document.querySelector('#dhishna-form');
const status = document.querySelector('#myopt');
var uploader = document.querySelector('#uploader');
var fileButton = document.querySelector('#filebtn');
var login = document.getElementById('login');


login.addEventListener("click",googleSignIn,false);

var name = result.additionalUserInfo.profile.name;

var firebaseConfig = {
    apiKey: "AIzaSyCOriEwZSFn407K4dMp3Az0p7_1nbNUTUI",
    authDomain: "dhishna-26447.firebaseapp.com",
    databaseURL: "https://dhishna-26447.firebaseio.com",
    projectId: "dhishna-26447",
    storageBucket: "dhishna-26447.appspot.com",
    messagingSenderId: "921942093809",
    appId: "1:921942093809:web:6f692bdd20aeff439bde50",
    measurementId: "G-9WY38E5C84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true});
  firebase.analytics();
  var provider = new firebase.auth.GoogleAuthProvider();

googleSignIn=()=>{
base_provider = new firebase.auth.GoogleAuthProvider()
firebase.auth().signInWithPopup(base_provider).then(function(result){
console.log(result.additionalUserInfo.profile.name)
var name = result.additionalUserInfo.profile.name;
db.collection('info').doc(result.additionalUserInfo.profile.name).set({
        name: result.additionalUserInfo.profile.name,
    })
console.log("Success")
//window.location.href = "stack.html";
const user = result.additionalUserInfo.profile.name;
}).catch(function(err){
    console.log(err)
    console.log("failed")
   //

})

  }
