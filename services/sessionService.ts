import AsyncStorage from "@react-native-async-storage/async-storage";

import { StorageKeys } from "@/enums/StorageKeys";
import { User } from "@/types/user";

export interface Session {
  [StorageKeys.PROFILE]: User;
  [StorageKeys.LOGIN_AT]: number;
  [StorageKeys.EXPIRES_AT]: number;
}

const SESSION_DURATION = 14 * 24 * 60 * 60 * 1000;

export async function refleshSession(profile: User): Promise<void> {
  const session: Session = {
    [StorageKeys.PROFILE]: profile,
    [StorageKeys.LOGIN_AT]: Date.now(),
    [StorageKeys.EXPIRES_AT]: Date.now() + SESSION_DURATION,
  };

  await AsyncStorage.setItem(StorageKeys.SESSION, JSON.stringify(session));
}

export async function getSession(): Promise<Session | null> {
  const session = await AsyncStorage.getItem(StorageKeys.SESSION);

  if (!session) return null;

  return JSON.parse(session);
}

export async function hasSession(): Promise<boolean> {
  return (await getSession()) !== null;
}

export async function clearSession(): Promise<void> {
  await AsyncStorage.removeItem(StorageKeys.SESSION);
}

export async function validateSession(): Promise<boolean> {
  const session = await getSession();

  if (!session) {
    return false;
  }

  if (Date.now() >= session[StorageKeys.EXPIRES_AT]) {
    await clearSession();
    return false;
  }

  return true;
}
