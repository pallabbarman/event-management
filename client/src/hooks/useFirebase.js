import axios from 'axios';
import {
    createUserWithEmailAndPassword,
    getAuth,
    getIdToken,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';

const useFirebase = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState('');

    initializeAuthentication();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // save email users in database
    const saveUserForEmail = (email, displayName) => {
        const user = { email, displayName };
        axios
            .post(`https://web-eventia.herokuapp.com/users`, user)
            .then((res) => {
                if (res.status === 200) {
                    toast.success('User Added in database successfully!');
                }
            })
            .catch((err) => toast.error(err.message));
    };

    // save gmail users in database
    const saveUserForOthers = (email, displayName) => {
        const user = { email, displayName };
        axios
            .put('https://web-eventia.herokuapp.com/users', user)
            .then((res) => {
                if (res.status === 200) {
                    toast.success('User Added in database successfully!');
                }
            })
            .catch((err) => toast.error(err.message));
    };

    // google sign in
    const googleSignIn = (navigate, location) => {
        signInWithPopup(auth, googleProvider)
            .then((userCredential) => {
                toast.success('Logged in successfully...');
                setLoggedInUser(userCredential.user);
                saveUserForOthers(userCredential.user.email, userCredential.user.displayName);
                const destination = location.state?.from || '/';
                navigate(destination);
            })
            .catch((error) => {
                toast.error(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setLoggedInUser(null);
                toast.error('Logged Out!!!');
            })
            .catch((error) => toast.error(error.message))
            .finally(() => setIsLoading(false));
    };

    // sign up with email and password
    const emailSignUp = (name, email, password, navigate) => {
        const loading = toast.loading('Creating User... Please wait!!!');
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    photoURL: 'https://i.ibb.co/7CzR0Dg/users.jpg',
                    displayName: name,
                });
                saveUserForEmail(email, name);
                toast.dismiss(loading);
                toast.success('Creating a new user successfully...');
                setLoggedInUser(userCredential.user);
                navigate('/');
            })
            .catch((error) => {
                toast.dismiss(loading);
                toast.error(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // sign in with email and password
    const emailSignIn = (email, password, navigate, location) => {
        const loading = toast.loading('Searching Account... Please wait!!!');
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.dismiss(loading);
                toast.success('logged in successfully...');
                setLoggedInUser(userCredential.user);
                const destination = location.state?.from || '/';
                navigate(destination);
            })
            .catch((error) => {
                toast.dismiss(loading);
                toast.error(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // observe user state change
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedInUser(user);
                getIdToken(user).then((idToken) => {
                    setToken(idToken);
                });
            } else {
                setLoggedInUser(null);
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, [auth]);

    // reset password
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Check your gmail inbox. We send an verification email');
            })
            .catch((err) => toast.error(err.message))
            .finally(() => setIsLoading(false));
    };

    return {
        loggedInUser,
        googleSignIn,
        isLoading,
        logOut,
        emailSignUp,
        emailSignIn,
        token,
        resetPassword,
    };
};

export default useFirebase;
