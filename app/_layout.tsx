import ProtectedRoute from "@/components/ProtectedRoute";
import { useColorScheme } from "@/components/useColorScheme";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export { ErrorBoundary } from "expo-router";

function RootNavigator() {
  const { authUser, profile, loading } = useAuth();

  const segments = useSegments();

  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup =
      segments[0] === "(auth)";

    if (!authUser && !inAuthGroup) {
      router.replace("/(auth)/login");
    }

    if (authUser && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [authUser, loading, segments]);

  if (loading) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider
        value={
          colorScheme === "dark"
            ? DarkTheme
            : DefaultTheme
        }
      >
        <AuthProvider>
          <ProtectedRoute>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(tabs)" />
            </Stack>
          </ProtectedRoute>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}