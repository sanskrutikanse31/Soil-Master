import React from "react";
import { db } from '../../src/FirebaseInit';

import { useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
const ModalCrop = ({ onClose }) => {
  //dechare variable that need to be added in databse

  const [cropName, setCropName] = useState("");
  const [cropDesc, setCropDesc] = useState("");
  const [soilType, setSoilType] = useState("");
  const [waterTable, setWaterTable] = useState("");
  const [waterHoldingCapacity, setWaterHoldingCapacity] = useState("");
  const [nutrientRequirement, setNutrientRequirement] = useState("");
  const [temperatureRange, setTemperatureRange] = useState("");
  const [clayProportion, setClayProportion] = useState("");
  const [drainage, setDrainage] = useState("");
  const [aeration, setAeration] = useState("");
  const [pHRange, setPHRange] = useState("");
  const [show, setShow] = useState("");
  // add a state to store the fetched data
  const [crops, setCrops] = useState([]);

  const valuesCrop = collection(db, "cropDetail");
  console.log(valuesCrop);
 

//-------------add data into database-----------------------------------------------
const handleAddCrop = async (e) => {
  e.preventDefault(); // Prevent the default form submission
  try {
    await addDoc(valuesCrop, {
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
    console.log("Crop Data Added Successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};


  //--------------update the data
  const handleUpdate = async (id) => {
    const updateData = doc(db, "cropDetail", id);
    await updateDoc(updateData, {
      cropName: cropName,
      cropDesc: cropDesc,
      soilType: soilType,
      waterTable: waterTable,
      waterHoldingCapacity: waterHoldingCapacity,
      nutrientRequirement: nutrientRequirement,
      temperatureRange: temperatureRange,
      clayProportion: clayProportion,
      drainage: drainage,
      aeration: aeration,
      pHRange: pHRange,
    });
    setShow(false);
    setCropName("");
    setCropDesc("");
    setSoilType("");
    setWaterTable("");
    setWaterHoldingCapacity("");
    setNutrientRequirement("");
    setTemperatureRange("");
    setClayProportion("");
    setDrainage("");
    setAeration("");
    setPHRange("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Create New Crop
          </h3>
          <button  onClick={onClose} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
        </div>
        {/* ------------------ */}
        <form onSubmit={handleAddCrop} class="p-4 md:p-5">
          <div class="grid gap-4 mb-4 grid-cols-2">
            {/* ----------- */}
            <div class="col-span-2 sm:col-span-1">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Crop Name
              </label>
              <input
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>
            {/* -------------- */}
          
          

            <div class="col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Description
              </label>
              <textarea
               value={cropDesc}
               onChange={(e) => setCropDesc(e.target.value)}
               type="text"
                id="description"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write product description here"
              ></textarea>
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="soilType"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Soil Type
              </label>
              <input
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                type="text"
                name="soilType"
                id="soilType"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="waterTable"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Water Table
              </label>
              <input
                value={waterTable}
                onChange={(e) => setWaterTable(e.target.value)}
                type="text"
                name="waterTable"
                id="waterTable"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="waterHoldingCapacity"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Water Holding Capacity
              </label>
              <input
                value={waterHoldingCapacity}
                onChange={(e) => setWaterHoldingCapacity(e.target.value)}
                type="text"
                name="waterHoldingCapacity"
                id="waterHoldingCapacity"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="nutrientRequirement"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nutrient Requirement
              </label>
              <input
                value={nutrientRequirement}
                onChange={(e) => setNutrientRequirement(e.target.value)}
                type="text"
                name="nutrientRequirement"
                id="nutrientRequirement"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="temperatureRange"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Temperature Range
              </label>
              <input
                value={temperatureRange}
                onChange={(e) => setTemperatureRange(e.target.value)}
                type="text"
                name="temperatureRange"
                id="temperatureRange"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="clayProportion"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Clay Proportion
              </label>
              <input
                value={clayProportion}
                onChange={(e) => setClayProportion(e.target.value)}
                type="text"
                name="clayProportion"
                id="clayProportion"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="drainage"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Drainage
              </label>
              <input
                value={drainage}
                onChange={(e) => setDrainage(e.target.value)}
                type="text"
                name="drainage"
                id="drainage"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="aeration"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Aeration
              </label>
              <input
                value={aeration}
                onChange={(e) => setAeration(e.target.value)}
                type="text"
                name="aeration"
                id="aeration"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="pHRange"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                pH Range
              </label>
              <input
                value={pHRange}
                onChange={(e) => setPHRange(e.target.value)}
                type="text"
                name="pHRange"
                id="pHRange"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            {!show ? (
              <button
                onClick={handleAddCrop}
                type="submit"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                
                Add Crop
              </button>
            ) : (
              <button
                onClick={handleUpdate}
                type="submit"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                
                Update
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCrop;
