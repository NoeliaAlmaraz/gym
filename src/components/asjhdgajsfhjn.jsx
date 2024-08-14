import React, { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, addDoc, doc, setDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIfoGUtD0iQK0LEjt869WEw_A52q152wk",
  authDomain: "gymmm-7e143.firebaseapp.com",
  projectId: "gymmm-7e143",
  storageBucket: "gymmm-7e143.appspot.com",
  messagingSenderId: "890931621334",
  appId: "1:890931621334:web:9089a440c873fa81574877"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Context = createContext();

const useAppContext = () => useContext(Context);

const ContextProvider = ({ children }) => {

  const saveDataToFirestore = async (inputValues, activePanel, activeInputName) => {
    try {
      // Referencia al documento en Firestore
      const docRef = doc(db, 'noelia','espalda',activePanel);

      // Verificar si el documento existe
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        // Si no existe, crear el documento con un array vacío
        console.log(`Documento ${activePanel} no existe, creándolo...`);
        await setDoc(docRef, { [activePanel]: [] });
      }

      // Preparar los datos para guardar
      const dataToSave = {
        ejercicio: inputValues[activeInputName] || '' // Evitar valores undefined
      };

      // Actualizar el documento en Firestore
      await updateDoc(docRef, {
        [activePanel]: arrayUnion(dataToSave),
      });

      console.log('Datos guardados exitosamente en Firestore.');
    } catch (error) {
      console.error('Error al guardar los datos en Firestore: ', error);
    }
  };

  return (
    <Context.Provider value={{ db, saveDataToFirestore }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, useAppContext };