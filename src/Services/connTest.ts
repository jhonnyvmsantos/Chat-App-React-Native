import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/firebaseConfig";

async function ConnectionTest() {
  try {
    const res = await getDocs(collection(db, "test"));

    console.log("Conexão com Firestore funcionando!");
    console.log("Documentos encontrados:", res.size);
  } catch (error) {
    console.error("Erro ao conectar ao Firestore:", error);
  }
}

export default ConnectionTest();
