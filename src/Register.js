import { setDoc,doc } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { db } from '../src/FirebaseInit';
import { auth } from '../src/FirebaseInit';

// import { auth } from '../../src/FirebaseInit';
import { Link } from "react-router-dom";
import SignInWithGoogle from "./signInWithGoogle";

//Register component
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [errors, setErrors] = useState({});//1

  //handleRegister  function
  const handleRegister = async (e) => {
    e.preventDefault();
    const isValid = validateForm(); //2
    if (isValid) { //3
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          role:"user"
        });
      }
      alert("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  }
}

//validateform is a function
  const validateForm = () => {  //4
    const errors = {};
    if (!fname) {
      errors.fname = "First name is required";
    }
    if (!lname) {
      errors.lname = "Last name is required";
    }
    if (!email) {
      errors.email = "Email address is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
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
  
    <div className="mt-40 flex justify-center">
    <form className="mx-auto  w-[300px] h-[520px]  p-6 bg-pink-100 bg-white border border-pink-400 rounded " onSubmit={handleRegister}>
      <h3 className="text-center font-extrabold text-black">Register Here</h3>
    
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
         {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
      </div>

      <div className="mb-3">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
        {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
      </div>

      <div className="mb-3">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
         {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      </div>

      <div className="d-grid">
        <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Signup
        </button>
      </div>
      <p className="forgot-password">
        Already have an account?<Link to="/login" className="text-blue-600 underline">Login</Link>
      </p>
      <SignInWithGoogle/>
    </form>
    </div>
    
  );
}

export default Register;