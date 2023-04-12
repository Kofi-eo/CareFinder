import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";


const Auth = createContext();

const AuthContext = ({ children }) => {
    const [signedIn, setSignedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
            }
            setLoading(false);
            setSignedIn(!!user);
        });
    }, []);

    return (
        <Auth.Provider
            value={{
                user,
                signedIn,
                loading,
                setSignedIn,
                setUser,
                setLoading,
            }}
        >
            {children}
        </Auth.Provider>
    );
};

export const useAuth = () => {
    return useContext(Auth);
};

export default AuthContext;

