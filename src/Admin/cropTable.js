import React, { useState, useEffect } from 'react';
import { db } from '../../src/FirebaseInit';
import { collection, addDoc, doc,getDocs,deleteDoc ,updateDoc} from "firebase/firestore";


const AddCrop = () => {
  const [cropName, setCropName] = useState('');
  const [cropDesc, setCropDesc] = useState('');
  const [soilType, setSoilType] = useState('');
  const [waterTable, setWaterTable] = useState('');
  const [waterHoldingCapacity, setWaterHoldingCapacity] = useState('');
  const [nutrientRequirement, setNutrientRequirement] = useState('');
  const [temperatureRange, setTemperatureRange] = useState('');
  const [clayProportion, setClayProportion] = useState('');
  const [drainage, setDrainage] = useState('');
  const [aeration, setAeration] = useState('');
  const [pHRange, setPHRange] = useState('');
  
  // add a state to store the fetched data
  const [crops, setCrops] = useState([]);

  const values = collection(db, "cropDetail");
    //get data
  useEffect(() => {
    const fetchCrops = async () => {
      const querySnapshot = await getDocs(values);
      const cropsData = querySnapshot.docs.map((doc) => doc.data());
      setCrops(cropsData);
    };
    fetchCrops();
  }, []);
 //-------------get data from the databse ,so use useEffect

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "cropDetail"), {
        cropName,
        cropDesc,
        soilType,
        waterTable,
        waterHoldingCapacity,
        nutrientRequirement,
        temperatureRange,
        clayProportion,
        drainage,
        aeration,
        pHRange,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Crop detailed added in the database");
      // update the crops state with the new data
      setCrops([...crops, { id: docRef.id, ...{ cropName, cropDesc, soilType, waterTable, waterHoldingCapacity, nutrientRequirement, temperatureRange, clayProportion, drainage, aeration, pHRange } }]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };


  //-----------------delete---------------------
  const handleDelete = async () => {
    
  };
  //---------------edit and update-------------------
  const handleEdit = async () => {
    
  };

  const handleUpdate = async () => {
    
  };

  return (
   <>
  

   <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full mt-8 text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-pink-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Crop Name
              </th>
              <th scope="col" class="px-6 py-3">
                Soil Type
              </th>
              <th scope="col" class="px-6 py-3">
                Water Table
              </th>
              <th scope="col" class="px-6 py-3">
                Water Holding Capacity
              </th>

              <th scope="col" class="px-6 py-3">
                Nutrient Requirement
              </th>
              <th scope="col" class="px-6 py-3">
                Temperature Range
              </th>
              <th scope="col" class="px-6 py-3">
                Clay Proportion
              </th>
              <th scope="col" class="px-6 py-3">
                Drinage
              </th>
              <th scope="col" class="px-6 py-3">
                Aeration
              </th>
              <th scope="col" class="px-6 py-3">
                pH Range
              </th>

              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {crops.map((crop, index) => (
            <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
             
              <td class="px-6 py-4">{crop.cropName} </td>
            
              <td class="px-6 py-4">{crop.soilType}</td>
              <td class="px-6 py-4">{crop.waterTable}</td>
              <td class="px-6 py-4">{crop.waterHoldingCapacity}</td>
              <td class="px-6 py-4">{crop.nutrientRequirement}</td>
              <td class="px-6 py-4">{crop.temperatureRange}</td>
              <td class="px-6 py-4">{crop.clayProportion}</td>
              <td class="px-6 py-4">{crop.drainage}</td>
              <td class="px-6 py-4">{crop.aeration}</td>
              <td class="px-6 py-4">{crop.pHRange}</td>
              <td class="px-6 py-4">
              <button class="font-medium text-green-600 dark:text-green-500 hover:underline " onClick={() => handleEdit(values.id)}>Edit</button>
                <button class="font-medium text-red-600 dark:text-red-500 hover:underline " onClick={() => handleDelete(values.id)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>


   </>
  );
};




export default AddCrop;



//-----------------------------------


