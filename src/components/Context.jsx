import React, { createContext, useContext} from 'react';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc, doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Context = createContext();

const useAppContext = () => useContext(Context);



const ContextProvider = ({ children }) => {

  
  const saveDataToFirestoreEspalda = async (inputValues,activePanel,activeInputName) => {

    try {
      const docRef = doc(db,activeInputName , 'espalda');
      await updateDoc(docRef, {
        [activePanel]: arrayUnion({
          ejercicio: inputValues[activeInputName] || '' // Evitar valores undefined
        }),
      });
    } catch (error) {
      console.error('Error al guardar los datos en Firestore: ', error);
    }
  };

  const saveDataToFirestoreBiceps = async (inputValues,activePanel,activeInputName) => {

    try {
      const docRef = doc(db,activeInputName , 'bicep');
      await updateDoc(docRef, {
        [activePanel]: arrayUnion({
          ejercicio: inputValues[activeInputName] || '' // Evitar valores undefined
        }),
      });
    } catch (error) {
      console.error('Error al guardar los datos en Firestore: ', error);
    }
  };

  const  saveDataToFirestoreHombro = async (inputValues,activePanel,activeInputName) => {

    try {
      const docRef = doc(db,activeInputName , 'hombro');
      await updateDoc(docRef, {
        [activePanel]: arrayUnion({
          ejercicio: inputValues[activeInputName] || '' // Evitar valores undefined
        }),
      });
    } catch (error) {
      console.error('Error al guardar los datos en Firestore: ', error);
    }
  };

  const  saveDataToFirestorePecho = async (inputValues,activePanel,activeInputName) => {

    try {
      const docRef = doc(db,activeInputName , 'pecho');
      await updateDoc(docRef, {
        [activePanel]: arrayUnion({
          ejercicio: inputValues[activeInputName] || '' // Evitar valores undefined
        }),
      });
    } catch (error) {
      console.error('Error al guardar los datos en Firestore: ', error);
    }
  };
  
  const  saveDataToFirestorePierna = async (inputValues,activePanel,activeInputName) => {

    try {
      const docRef = doc(db,activeInputName , 'pierna');
      await updateDoc(docRef, {
        [activePanel]: arrayUnion({
          ejercicio: inputValues[activeInputName] || '' // Evitar valores undefined
        }),
      });
    } catch (error) {
      console.error('Error al guardar los datos en Firestore: ', error);
    }
  };

  const  saveDataToFirestoreTriceps = async (inputValues,activePanel,activeInputName) => {

    try {
      const docRef = doc(db,activeInputName , 'tricep');
      await updateDoc(docRef, {
        [activePanel]: arrayUnion({
          ejercicio: inputValues[activeInputName] || '' // Evitar valores undefined
        }),
      });
    } catch (error) {
      console.error('Error al guardar los datos en Firestore: ', error);
    }
  };

  return (
    <Context.Provider value={{db,saveDataToFirestoreEspalda, saveDataToFirestoreBiceps, saveDataToFirestoreHombro, saveDataToFirestorePecho, saveDataToFirestorePierna, saveDataToFirestoreTriceps  }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, useAppContext };