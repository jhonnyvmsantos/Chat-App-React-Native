import ProtectedRoute from "@/components/ProtectedRoute";
import { useColorScheme } from "@/components/useColorScheme";
import { AuthProvider } from "@/contexts/AuthContext";
import { ChatProvider } from "@/contexts/ChatContext";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export { ErrorBoundary } from "expo-router";

function RootNavigator() {
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
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}      >
        <AuthProvider>
          <ChatProvider>
            <ProtectedRoute>
              <RootNavigator />
            </ProtectedRoute>
          </ChatProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}