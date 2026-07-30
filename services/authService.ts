import { ErrorCode } from "@/enums/ErrorCodes";
import { AppError } from "@/errors/AppError";
import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createProfile } from "./profileService";
import { clearSession } from "./sessionService";

async function register(
  displayName: string,
  email: string,
  password: string,
): Promise<void> {
  let credential;

  try {
    credential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(credential.user, { displayName });

    await createProfile(credential.user.uid, displayName, email);
  } catch (error) {
    if (credential?.user) {
      try {
        await deleteUser(credential.user);
      } catch {}
    }

    throw new AppError(
      ErrorCode.AUTH_REGISTER,
      error instanceof Error ? error.message : "Erro ao cadastrar usuário.",
    );
  }
}

async function login(email: string, password: string): Promise<void> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new AppError(
      ErrorCode.AUTH_LOGIN,
      error instanceof Error ? error.message : "Erro ao realizar login.",
    );
  }
}

async function logout(): Promise<void> {
  try {
    await signOut(auth);
    clearSession();
  } catch (error) {
    throw new AppError(
      ErrorCode.AUTH_LOGOUT,
      error instanceof Error ? error.message : "Erro ao sair da conta.",
    );
  }
}

function getCurrentUser() {
  return auth.currentUser;
}

export { getCurrentUser, login, logout, register };

