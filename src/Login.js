import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { doc,getDoc } from "@firebase/firestore";
import { db } from "./FirebaseInit";
import { auth } from "./FirebaseInit";
import { toast } from "react-toastify";
import SignInWithGoogle from "./signInWithGoogle";
import { Link } from "react-router-dom";
import "./index.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); //1
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm(); //2
    if (isValid) {
      //3
      // try {
       await signInWithEmailAndPassword(auth, email, password)
       
        // console.log("User logged in Successfully");
        .then(async (userCredential) => {
          // Signed in 
          // const user = userCredential.user;
          console.log(userCredential);
          const user = userCredential.user;
          const userSnap = await getDoc(doc(db, "Users", user.uid));
  
  if (userSnap.exists()) {
    const userData = userSnap.data();
    console.log("User Role:", userData.role);
    console.log("User email:", user.email);
    if (userData.role==="admin") {
              window.location.href = "/admin-dashboard";
              toast.success("User logged in Successfully", {
                position: "top-center",
              });
            } else {
              window.location.href = "/home";
              toast.success("User logged in Successfully", {
                position: "top-center",
              });
  } 
   
  }
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      
  //       if (email === "admin123@gmail.com") {
  //         window.location.href = "/admin-dashboard";
  //         toast.success("User logged in Successfully", {
  //           position: "top-center",
  //         });
  //       } else {
  //         window.location.href = "/home";
  //         toast.success("User logged in Successfully", {
  //           position: "top-center",
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //       alert("invalid user");
  //       toast.error(error.message, {
  //         position: "bottom-center",
  //       });
  //     }
    }
  };
  const validateForm = () => {
    //4
    const errors = {};
    if (!email) {
      errors.email = "Email address is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div class="mt-40 flex justify-center">
      <form
        class="  w-[300px] h-[400px] p-6 bg-pink-100 bg-white border border-pink-400 rounded"
        onSubmit={handleSubmit}
      >
        <h3 class="text-center font-extrabold text-black">Login</h3>

        <div className="mb-3">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>

        <div className="d-grid">
          <button
            type="submit"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button>
        </div>
        <p className="forgot-password">
          Dont't have an account?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Sign up
          </Link>
        </p>
        <SignInWithGoogle />
      </form>
    </div>
  );
}

export default Login;
