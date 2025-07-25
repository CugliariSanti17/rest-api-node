import {
    collection, 
    getDocs, 
    getDoc, 
    doc, 
    addDoc, 
    deleteDoc, 
    setDoc
} from "firebase/firestore";

import {db} from './firebase.js'

const productsCollection = collection(db, 'products')

export const getAllProducts = async () =>{
    try {
        const snapshot = await getDocs(productsCollection);

        return snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()  }))
    } catch (error) {
        console.error(error)
    }
}

export const getProductById = async (id) =>{
    try {
        const productRef = doc(productsCollection, id)
        const snapshot = await getDoc(productRef)

        return snapshot.exists() ? {id: snapshot.id, ...snapshot.data()} : null;
    } catch (error) {
        console.error(error)
    }
}

export const postProduct = async (data) =>{
    try {
        const docRef = await addDoc(productsCollection, data);
        return {id: docRef.id, ...data};
    } catch (error) {
        console.error(error)
    }
}

export const putProduct = async (id, data) =>{
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()){
            return false
        };

        await setDoc(productRef, data);
        return {id, ...data};
    } catch (error) {
        console.error (error)
    }
}

export const deleteProduct = async (id) =>{
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()){
            return false
        };

        await deleteDoc(productRef);
        return true;
    } catch (error) {
        console.error(error)
    }
}