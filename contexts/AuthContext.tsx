import { auth } from "@/firebase/config";
import { getProfile } from "@/services/profileService";
import { refleshSession } from "@/services/sessionService";
import { User } from "@/types/user";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type AuthContextData = {
    authUser: FirebaseUser | null;
    profile: User | null;
    loading: boolean;

    refreshProfile: (user: FirebaseUser | null) => Promise<void>;
};

type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [authUser, setAuthUser] = useState<FirebaseUser | null>(null);

    const [profile, setProfile] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);

    async function refreshProfile(user: FirebaseUser | null) {
        if (!user) {
            setAuthUser(null);
            setProfile(null);
            return;
        }

        setAuthUser(user);

        const profile = await getProfile(user.uid);

        setProfile(profile);

        profile && await refleshSession(profile)
    }

    useEffect(() => {
        const state = onAuthStateChanged(auth, async (user) => {
            await refreshProfile(user);
            setLoading(false);
        },);

        return state;
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, profile, loading, refreshProfile }} >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}



export { AuthProvider, useAuth };

