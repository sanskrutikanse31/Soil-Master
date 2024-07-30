import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "./FirebaseInit";
import { setDoc, doc } from "@firebase/firestore";
import { db } from '../src/FirebaseInit';
function SignInWithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log(result);
        const user = result.user;
        if (result.user) {
          await setDoc(doc(db, "users", user.id), {
            email: user.email,
            firstName: user.displayName,
            lastName: "",
          });
          toast.success("user logged in successfully", {
            position: "top-center",
          });
          window.location.href = "/home";
        }
      })
      .catch((error) => {
        // Handle authentication error
        console.error("Authentication error:", error);
      });
  }
  return (
    <div>
      <p>--or continue with</p>
   
      {/* ------------------------------- */}
      <div style={{ display: "flex", cursor: "pointer" }} onClick={googleLogin}>
        <img
          src={`${"https://firebasestorage.googleapis.com/v0/b/soil-master-210f1.appspot.com/o/sign%20in%20with%20google%20firebase%20img.png?alt=media&token=3789d868-d935-462c-aa85-a978a77f523f"}`}
          width="60%"
        />
      </div>
    </div>
  );
}
export default SignInWithGoogle;