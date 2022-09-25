// importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js");
// var firebaseConfig = {
// apiKey: "AIzaSyBDoh_e8OCYhmm50BEN_5scjMolfyyCho4",
// authDomain: "clubrareb.firebaseapp.com",
//   projectId: "clubrareb",
//   storageBucket: "clubrareb.appspot.com",
//   messagingSenderId: "450729594563",
//   appId: "1:450729594563:web:66306eb963e8783baf5c76",
//   measurementId: "G-W4NC8D0QH5"
// };
// initializeApp(firebaseConfig);
// const messaging = getMessaging();
// messaging.onBackgroundMessage(function (payload) {
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

importScripts('https://www.gstatic.com/firebasejs/5.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.1/firebase-messaging.js');
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
      }).catch(function(err) {
      });
   }
firebase.initializeApp({
   messagingSenderId: "435915250453",
  })
const initMessaging = firebase.messaging()