import React from 'react'
import { auth } from './FirebaseInit';
import { RiLogoutCircleLine } from "react-icons/ri";
 function Logout (){
    async function handleLogout()
    {
        try{
        await auth.signOut();
        window.location.href="/login";
        console.log("user logged out successfully")

        }
        catch(error){
            console.log(error.message)

        }
    }
    return(
      <>
      
      <button onClick={handleLogout} type="button" class="h-[40px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-3"> Logout <RiLogoutCircleLine /></button>
        </>
    )
 }
export default Logout;
