// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, 
          doc,
          getDoc,
          collection,
          getDocs,
          query,
          where } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqElCHNcUUjnfCqx7eVI2VF4IoQhzh8nM",
  authDomain: "ejanime-store.firebaseapp.com",
  projectId: "ejanime-store",
  storageBucket: "ejanime-store.appspot.com",
  messagingSenderId: "261093754994",
  appId: "1:261093754994:web:e49a0ec6dd56c5246e1aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getSingleItem(itemId){
  let docRef = doc(db,"products", itemId)
  let docSnap = await getDoc(docRef)
  let item = docSnap.data()
  item.id = docSnap.id;
  return item;
}

export async function getItems(){
  let collectionRef = collection(db, "products");
  let docsSnap = await getDocs(collectionRef);
  let docsArray = docsSnap.docs;
  let dataDocs = docsArray.map(doc=>{
    let item = doc.data();
    item.id = doc.id;
    return item;
  })

  return dataDocs;
}

export async function getItemsCategory(category){
  let collectionRef = collection(db, "products");
  let q = query(collectionRef, where("categoria","==", category))
  let docsSnap = await getDocs(q);
  let docsArray = docsSnap.docs;
  let dataDocs = docsArray.map(doc=>{
    let item = doc.data();
    item.id = doc.id;
    return item;
  })

  return dataDocs;
}












