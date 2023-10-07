import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; 
import { ChakraProvider } from "@chakra-ui/react";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQzy3OydGAUy-Pc8aZuaQJwLQcTkKahzo",
  authDomain: "comision-react-7c13b.firebaseapp.com",
  projectId: "comision-react-7c13b",
  storageBucket: "comision-react-7c13b.appspot.com",
  messagingSenderId: "143573771106",
  appId: "1:143573771106:web:a509601392fcb8fa9b423b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);