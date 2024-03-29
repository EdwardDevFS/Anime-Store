// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, 
          doc,
          getDoc,
          collection,
          getDocs,
          query,
          where,
          addDoc } from "firebase/firestore";



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

export async function exportItemsToFirestore(){
  const products = [
    {
        id: 1,
        categoria : "Figuras",
        title:"Figura Vladilena",
        anime: "Eighty Six",
        personaje: "vladilena",
        desc:"Todos nuestros productos son completamente nuevos y los revisamos antes de proceder al envío definitivo, si hay algún producto deteriorado lo devolvemos automáticamente a nuestro distribuidor.",
        url:"https://animecristal.com/wp-content/uploads/2021/05/Figuras-86-Eighty-Six-500x750.jpg",
        alt:"Figuras 86 Eighty Six",
        price: 120,
        stock: 6
    },
    {
        id: 2,
        categoria : "Figuras",
        title:"Figura de Saitama",
        anime: "One punch man",
        personaje: "saitama",
        desc:"Todos nuestros productos son completamente nuevos y los revisamos antes de proceder al envío definitivo, si hay algún producto deteriorado lo devolvemos automáticamente a nuestro distribuidor.",
        url:"https://zenstatic.blob.core.windows.net/blog/flq3vof4.ui1",
        alt:"Figuras One Punch Man",
        price: 120,
        stock: 8
    },
    {
        id: 3,
        categoria : "Figuras",
        title:"Rem",
        anime: "Re:Zero",
        personaje: "rem",
        desc:"Rem es un personaje ficticio de la novela ligera de fantasía y la serie de anime Re:Zero",
        url:"https://cdn.shopify.com/s/files/1/0293/3007/9877/products/41zX7M3-zxL_8b6be60d-6a7b-46c8-91bd-25ed4f0a7b8d_900x900.jpg?v=1664824349",
        alt:"Figuras 86 Eighty Six",
        price: 120,
        stock: 10
    },
    {
        id: 4,
        categoria : "Figuras",
        title:"TANJIROU KAMADO",
        anime: "Kimetsu no yaiba",
        personaje: "tanjirou kamado",
        desc:" ¡Tanjirou Kamado, el cazador de demonios que persigue al demonio que asesinó a su familia y convirtió a su hermana Nezuko en un demonio, hace otra aparición en la línea Banpresto con esta figura! Esta vez viene sin su abrigo largo, revelando el uniforme estándar de Demon Hunter.",
        caracter: "6,3 pulgadas (16 cm)\nFabricado en PVC y ABS.\nDe la serie Demon Slayer: Kimetsu no Yaiba\nno articulado\nSe requiere algún ensamblaje\nIncluye peana",
        url:"https://cdn.shopify.com/s/files/1/0729/8793/products/f903a51f-b70b-4ff1-ab90-15c2f0073562_677x.progressive.jpg?v=1659899037",
        alt:"My Hero Academia - Eijiro Unbreakable",
        price: 129.00,
        stock: 15
    },
    {
        id: 5,
        categoria : "Figuras",
        anime: "Kimetsu no Yaiba",
        title:"MAKOMO",
        personaje: "Makomo",
        desc:" ¡Del Demon Slayer: Kimetsu no Yaiba anime viene una figura de Makomo! Ella mide casi 6 pulgadas de alto y ha sido recreada fielmente.",
        caracter: "5,9 pulgadas (15 cm)\nHecho de plástico\nDe la serie Demon Slayer: Kimetsu no Yaiba\nversión sepia\nMuy detallado\nno articulado",
        url:"https://cdn.shopify.com/s/files/1/0729/8793/products/b86e0a8c-b77e-4fcc-9ee9-7bf6126b0495_677x.progressive.jpg?v=1664552242",
        alt:"Demon Slayer: Kimetsu no Yaiba Vol.21 Makomo",
        price: 139.00,
        stock: 15
    },
    {
        id: 6,
        categoria : "Funko",
        title:"My Hero Academia Specialty Series - 6",
        anime: "My hero Academia",
        desc:"¡Estallido! las figuras dan vida a tus personajes de anime favoritos (y villanos) con diseños estilizados únicos. ¡Esta figura de vinilo de gran tamaño de Gigantomachia mide 6 pulgadas de alto y viene en una caja con ventana, lo que la hace ideal para exhibirla!",
        caracter: "6 pulgadas (15,24 cm)\nHecho de vinilo\nBasado en el anime My Hero Academia\nDiseño estilizado urbano\nViene en embalaje de caja de ventana.",
        url:"https://cdn.shopify.com/s/files/1/0729/8793/products/funko-pop-my-hero-academia-gigantomachia-1150_1080x1080_9054f8f3-faf6-4ffa-a268-79a2c457c2bf_561x.progressive.jpg?v=1665691656",
        alt:"My Hero Academia Specialty Series - 6",
        price: 129.00,
        stock: 15
    },
    {
        id: 7,
        categoria : "Funko",
        anime: "My hero Academia",
        title:"My Hero Academia - Eijiro Unbreakable",
        desc:" ¡Colecciona más personajes de la serie de anime y manga de superhéroes japoneses My Hero Academia con este Unbreakable Eijiro Pop! \n¡Estallido! Las figuras dan vida a tus personajes favoritos con un diseño estilizado único. ¡Cada figura de vinilo, como este Eijiro Unbreakable Funko Pop!, mide 3,75 pulgadas de alto y viene en una caja con ventana, ¡lo que las hace ideales para exhibir!",
        caracter: "3,75 pulgadas (9,5 cm)Hecho de vinilo\nDiseño estilizado urbano\nBasado en el anime My Hero Academia\nViene en embalaje de caja de ventana.",
        url:"https://cdn.shopify.com/s/files/1/0293/3007/9877/products/it_2_260x322.jpg?v=1582270952",
        alt:"My Hero Academia - Eijiro Unbreakable",
        price: 79.00,
        stock: 15
    },
    {
        id: 8,
        categoria : "manga",
        anime: "Chainsaw man",
        title:"Chainsaw Man Vol. 11",
        autor: "Tatsuki Fujimoto",
        sinopsis:"Denji era un cazador de demonios de poca monta que intentaba sobrevivir en un mundo duro. descpués de ser asesinado en un trabajo, Denji es revivido por su perro mascota Pochita y se convierte en algo nuevo y peligroso: ¡Chainsaw Man! Si eres fanático de la acción, las risas o las batallas épicas con motosierras, este es tu manga.",
        url:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781974727117_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        alt:"Chainsaw Man, Vol. 11",
        price: 50.00,
        stock: 15
    },
    {
        id: 9,
        categoria : "manga",
        anime: "Chainsaw man",
        title:"Chainsaw Man Vol. 1",
        autor: "Tatsuki Fujimoto",
        sinopsis:"Denji era un cazador de demonios de poca monta que intentaba sobrevivir en un mundo duro. descpués de ser asesinado en un trabajo, su demonio mascota Pochita lo revive y se convierte en algo nuevo y peligroso: ¡Chainsaw Man!",
        url:"https://prodimage.images-bn.com/pimages/9781974709939_p0_v1_s600x595.jpg",
        alt:"Chainsaw Man, Vol. 1",
        price: 50.00,
        stock: 15
    },
    {
        id: 10,
        categoria : "manga",
        anime: "Konosuba",
        title:"God's Blessing on This Wonderful World!, Vol. 1",
        autor: "Natsume Akatsuki",
        sinopsis:"Kazuma Sato es un amante de los videojuegos, o al menos lo era, hasta que un humillante accidente de tráfico pone fin a su joven vida. Pero descpués de su muerte, una hermosa chica que dice ser una diosa",
        url:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780316552561_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
        alt:"Konosuba",
        price: 30.00,
        stock: 15
    },
  ];
  const collectionRef = collection(db, "products")

  for (const item of products){
    // addDoc(collectionRef, item).then((respuesta) => console.log("item creado con el id: -->",respuesta.id));
  }
  // let newItem = await addDoc(collectionRef, item)
}












