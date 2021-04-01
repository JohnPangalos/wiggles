import App from "./App.svelte";
import "./index.css";
export default (async () => {
  const firebase = await import("firebase/app");
  await import("firebase/auth");
  await import("firebase/firestore");

  firebase.default.initializeApp({
    apiKey: "AIzaSyDcx5xDlQS3ixEFF8mESoxUzTk9f56uQhA",
    authDomain: "wiggles-f0bd9.firebaseapp.com",
    databaseURL: "https://wiggles-f0bd9.firebaseio.com",
    projectId: "wiggles-f0bd9",
    storageBucket: "wiggles-f0bd9.appspot.com",
    messagingSenderId: "837754270874",
    appId: "1:837754270874:web:4760e51978d04dfb",
  });

  return new App({
    target: document.body,
  });
})();