import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveData<T>(key: string, value: T) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function loadData<T>(key: string): Promise<T | null> {
  const json = await AsyncStorage.getItem(key);

  if (!json) return null;

  return JSON.parse(json) as T;
}

export async function removeData(key: string) {
  await AsyncStorage.removeItem(key);
}

export async function clearStorage() {
  await AsyncStorage.clear();
}
