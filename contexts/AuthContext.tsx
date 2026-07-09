import {
    User as FirebaseUser,
    onAuthStateChanged,
} from "firebase/auth";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import { auth } from "@/firebase/config";
import { getProfile } from "@/services/profileService";
import { User } from "@/types/user";

type AuthContextData = {
    authUser: FirebaseUser | null;
    profile: User | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

type AuthProviderProps = {
    children: ReactNode;
};

function AuthProvider({
    children,
}: AuthProviderProps) {
    const [authUser, setAuthUser] =
        useState<FirebaseUser | null>(null);

    const [profile, setProfile] =
        useState<User | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            async (user) => {
                if (!user) {
                    setAuthUser(null);
                    setProfile(null);
                    setLoading(false);
                    return;
                }

                const profile = await getProfile(user.uid);

                setAuthUser(user);
                setProfile(profile);

                setLoading(false);
            },
        );

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authUser,
                profile,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export {
    AuthProvider,
    useAuth
};

