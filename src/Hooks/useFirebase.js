import {
    onAuthStateChanged,
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";



initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const SigninWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, GoogleProvider).then((result) => {
            setUser(result.user);
        })
            .finally(() => {
                setIsLoading(false);
            })
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const LogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => {
                setIsLoading(false);
            })
    };

    return {
        SigninWithGoogle,
        isLoading,
        user,
        LogOut
    };
};

export default UseFirebase;