import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("value", (dataSnapshot) => {
//   const expenses = [];
//   dataSnapshot.forEach((childSnapShot) => {
//     expenses.push({
//       id: childSnapShot.key,
//       ...childSnapShot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").on("child_removed", (dataSnapshot) => {
//   const expenses = [];
//   dataSnapshot.forEach((childSnapShot) => {
//     expenses.push({
//       id: childSnapShot.key,
//       ...childSnapShot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").on("child_changed", (dataSnapshot) => {
//   const expenses = [];
//   dataSnapshot.forEach((childSnapShot) => {
//     expenses.push({
//       id: childSnapShot.key,
//       ...childSnapShot.val(),
//     });
//   });
//   console.log(expenses);
// });
// database.ref("expenses").push({
//   description: "test description",
//   note: "this is my description",
//   amount: 55,
//   createAt: 0,
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val(),
//       });
//     });
//     console.log(expenses);
//   })
//   .catch((e) => {
//     console.log(`FUCK ${e}`);
//   });

// database.ref().on("value", (dataSnapshot) => {
//   const data = dataSnapshot.val();
//   const name = data.name;
//   const position = data.job.position;
//   const company = data.job.company;

//   console.log(`${name} is a ${position} at ${company}`);
// });
// database.ref("age");
// setTimeout(() => {
//   database.ref().update({
//     stressLevel: 9,
//     "job/position": "was fired developer",
//     "job/company": "from amazon",
//   });
// }, 3000);

// database
//   .ref()
//   .once("value")
//   .then((dataSnapshot) => {
//     const val = dataSnapshot.val();
//     // console.log(dataSnapshot);
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(`error:${e}`);
//   });

// database.ref().set({
//   name: "Omar Vega",
//   age: 38,
//   stressLevel: 6,
//   job: {
//     position: "Software Developer",
//     company: "Google",
//   },
//   location: {
//     city: "Miami",
//     state: "florida",
//   },
// });

// database.ref().update({
//   stressLevel: 9,
//   "job/position": "lead developer",
//   "job/company": "amazon",
// });
