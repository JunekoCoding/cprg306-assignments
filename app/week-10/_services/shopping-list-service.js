import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Function to retrieve all items for a specific user
export const getItems = async (userId) => {
  try {
    const items = [];
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });

    return items;
  } catch (error) {
    console.error("Error in getItems: ", error);
  }
};

// Function to add a new item to a specific user's items collection
export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);

    return docRef.id;
  } catch (error) {
    console.error("Error in addItem: ", error);
  }
};
