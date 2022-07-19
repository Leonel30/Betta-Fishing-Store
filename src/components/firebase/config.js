import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDkZasCyVALvgm2MfIV9sLTOEMS52r5ERQ",
    authDomain: "betta-shop-ecommerce.firebaseapp.com",
    projectId: "betta-shop-ecommerce",
    storageBucket: "betta-shop-ecommerce.appspot.com",
    messagingSenderId: "761955250691",
    appId: "1:761955250691:web:fe3eda4bd267c697095436"
  };
    
  const app = initializeApp(firebaseConfig);  

  export const db = getFirestore(app);