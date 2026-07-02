import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
} from "firebase/firestore";
import { CollectionName } from "../app/_layout";
import { AppError } from "../errors/AppError";
import { ErrorCode } from "../errors/ErrorCodes";
import { db } from "../firebase/config";

async function collectionExists(name: string): Promise<boolean> {
  try {
    const res = query(collection(db, name), limit(1));
    const snapshot = await getDocs(res);

    return !snapshot.empty;
  } catch (error) {
    throw new AppError(
      ErrorCode.VERIFY_COLLECTION,
      `Erro ao verificar a collection: ${
        error instanceof Error ? error.message : "Erro desconhecido"
      }`,
    );
  }
}

async function collectionCreate(name: string) {
  try {
    await setDoc(doc(db, name, "_init"), {
      createdAt: new Date(),
    });
  } catch (error) {
    throw new AppError(
      ErrorCode.CREATE_COLLECTION,
      `Erro ao criar a collection: ${
        error instanceof Error ? error.message : "Erro desconhecido"
      }`,
    );
  }
}

async function verifyAndCreateCollections(
  name: CollectionName,
): Promise<boolean> {
  try {
    const exists = await collectionExists(name);

    if (!exists) {
      await collectionCreate(name);

      console.log(`Collection \'${name}\' criada com sucesso.`);
    }

    return true;
  } catch (error) {
    if (error instanceof AppError) {
      switch (error.code) {
        case ErrorCode.VERIFY_COLLECTION:
          console.error(`[${ErrorCode.VERIFY_COLLECTION}] ${error.message}`);
          break;

        case ErrorCode.CREATE_COLLECTION:
          console.error(`[${ErrorCode.CREATE_COLLECTION}] ${error.message}`);
          break;

        default:
          console.error(`[${ErrorCode.APP_ERROR}] ${error.message}`);
      }
    } else {
      console.error(`[${ErrorCode.UNEXPECTED_ERROR}]`, error);
    }

    return false;
  }
}

export { collectionCreate, collectionExists, verifyAndCreateCollections };

