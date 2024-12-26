import {app} from "../configuration";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export const SignUp = () => {
    
    const signupWithGoogle = () => {
        signInWithPopup(auth, googleProvider);
    }
    return (
        <>
            <button onClick={signupWithGoogle} className="bg-white px-2 py-1 text-black rounded-xl">Sign In with Google</button>
        </>
    )
}