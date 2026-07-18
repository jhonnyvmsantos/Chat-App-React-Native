import { auth } from "@/firebase/config";
import { getProfile } from "@/Services/profileService";
import { User } from "@/types/user";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type AuthContextData = {
    authUser: FirebaseUser | null;
    profile: User | null;
    loading: boolean;

    refreshProfile: () => Promise<void>;
};

type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [authUser, setAuthUser] = useState<FirebaseUser | null>(null);

    const [profile, setProfile] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);

    async function refreshProfile() {
        const user = auth.currentUser;

        if (!user) {
            setAuthUser(null);
            setProfile(null);
            return;
        }

        setAuthUser(user);

        const profile = await getProfile(user.uid);

        console.log(profile)
        setProfile(profile);
    }

    useEffect(() => {
        const state = onAuthStateChanged(auth, async () => {
            await refreshProfile();
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

