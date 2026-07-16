import { auth } from "@/firebase/config";
import { getProfile } from "@/Services/profileService";
import { User } from "@/types/user";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type AuthContextData = {
    authUser: FirebaseUser | null;
    profile: User | null;
    loading: boolean;
};

type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [authUser, setAuthUser] = useState<FirebaseUser | null>(null);

    const [profile, setProfile] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const state = onAuthStateChanged(auth, async (user) => {

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
        },);

        return state; //serve para excluir os "logs" (listeners) anteriores
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, profile, loading }} >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };

