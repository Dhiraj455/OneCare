import { db } from "../Config/firebase-db";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollection = collection(db, "users");

export const addUser = async (user) => {
    return await addDoc(userCollection, user);
}

export const getAllUsers = async () => {
    const data = await getDocs(userCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export const getUser = async (id) => {
    const data = await getDoc(doc(db, "users", id));
    return data.data();
}

export const updateUser = async (id, user) => {
    return await updateDoc(doc(db, "users", id), user);
} 

export const deleteUser = async (id) => {
    return await deleteDoc(doc(db, "users", id));
}
