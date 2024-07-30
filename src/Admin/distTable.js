import React, { useState ,useEffect} from "react";
import { db } from '../../src/FirebaseInit';
import { collection, addDoc,deleteDoc,doc,getDocs} from "firebase/firestore";


const AddDistributor= () => {
  const [name, setDistributorName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  
  const [price, setProductPrice] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [distributors, setDistributor] = useState([]);


  const values = collection(db, "distributorDetail");
  useEffect(() => {
    const fetchDistributors = async () => {
      const distributorsRef = collection(db, "distributorDetail");
      const querySnapshot = await getDocs(distributorsRef);
      const distributors = querySnapshot.docs.map((doc) => doc.data());
      setDistributor(distributors);
    };
    fetchDistributors();
  }, []);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "distributorDetail"), {
        name: "",
        email: "",
        phoneNumber: "",
        productOfferings: {
          productName: "",
          productType: "",
          
          price: 0,
        },
        address: {
          streetAddress: "",
          city: "",
          state: "",
          zipcode: "",
          country: "",
        },
        
      });

      console.log("Document written with ID: ", docRef.id);
      alert("Crop detailed added in the database");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  const handleDelete = async (id) => {
    const deleteVal = doc(db, "distributorDetail", id);
    await deleteDoc(deleteVal);
  };
  return (
    <>
   
 
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
         <table class="w-full mt-8 text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
           <thead class="text-xs text-gray-700 uppercase bg-pink-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
               <th scope="col" class="px-6 py-3">
                 Name
               </th>
               <th scope="col" class="px-6 py-3">
                Email
               </th>
               <th scope="col" class="px-6 py-3">
                 Phone Number
               </th>
               <th scope="col" class="px-6 py-3">
                Product Name
               </th>
 
               <th scope="col" class="px-6 py-3">
                Product Type
               </th>
               <th scope="col" class="px-6 py-3">
                 Price
               </th>
               <th scope="col" class="px-6 py-3">
                 Street Adress
               </th>
               <th scope="col" class="px-6 py-3">
                 City
               </th>
               <th scope="col" class="px-6 py-3">
                State 
               </th>
               <th scope="col" class="px-6 py-3">
                Zipcode
               </th>
               <th scope="col" class="px-6 py-3">
                Country
               </th>
 
               <th scope="col" class="px-6 py-3">
                 Action
               </th>
             </tr>
           </thead>
           <tbody>
           {distributors.map((distributor, index) => (
             <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              
               <td class="px-6 py-4">{distributor.name}</td>
             
               <td class="px-6 py-4">{distributor.email}</td>
               <td class="px-6 py-4">{distributor.phoneNumber}</td>
               <td class="px-6 py-4">{distributor.productOfferings.productName}</td>
               <td class="px-6 py-4">{distributor.productOfferings.productType}</td>
              
               <td class="px-6 py-4">{distributor.productOfferings.price}</td>
               <td class="px-6 py-4">{distributor.address.streetAddress}</td>
               <td class="px-6 py-4">{distributor.address.city}</td>
               <td class="px-6 py-4">{distributor.address.state}</td>
               <td class="px-6 py-4">{distributor.address.zipcode}</td>
               <td class="px-6 py-4">{distributor.address.country}</td>

               <td className="px-6 py-4">
               <button className="font-medium text-green-600 dark:text-green-500 hover:underline " onClick={() => handleDelete(distributor.id)}>Edit</button>
                 
                 <button className="font-medium text-red-600 dark:text-red-500 hover:underline " onClick={() => handleDelete(distributor.id)}>Delete</button>
               </td>
             </tr>
           ))}
           </tbody>
         </table>
       </div>
 
 
    </>
   );
};

export default AddDistributor;

