import React, { createContext, useContext} from 'react';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc, doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIfoGUtD0iQK0LEjt869WEw_A52q152wk",
  authDomain: "gymmm-7e143.firebaseapp.com",
  projectId: "gymmm-7e143",
  storageBucket: "gymmm-7e143.appspot.com",
  messagingSenderId: "890931621334",
  appId: "1:890931621334:web:9089a440c873fa81574877"
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