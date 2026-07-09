import { useRouter, useSegments } from "expo-router";
import { ReactNode, useEffect } from "react";

import { useAuth } from "@/contexts/AuthContext";

type ProtectedRouteProps = {
    children: ReactNode;
};

export default function ProtectedRoute({
    children,
}: ProtectedRouteProps) {
    const { authUser, loading } = useAuth();

    const router = useRouter();

    const segments = useSegments();

    useEffect(() => {
        if (loading) return;

        const inAuthGroup = segments[0] === "(auth)";

        if (!authUser && !inAuthGroup) {
            router.replace("/(auth)/login");
        }

        if (authUser && inAuthGroup) {
            router.replace("/(tabs)");
        }
    }, [authUser, loading, router, segments,]);

    if (loading) {
        return null;
    }

    return children;
}