import React from "react";
import { db } from "../../src/FirebaseInit";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import AddDistributor from "./distTable";
const ModalDistributor = ({ onClose }) => {
  //dechare variable that need to be added in databse

  const [name, setDistributorName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");

  const [price, setProductPrice] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [country, setCountry] = useState("");
  // const [zipcode, setZipcode] = useState("");

  const [show, setShow] = useState("");
  // add a state to store the fetched data

  const values = collection(db, "distributorDetail");

  console.log(values);

  //-------------add data into database
  const handleAddDistributor = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      await addDoc(values, {
        name,
        email,
        phoneNumber,
        productName,
        productType,
        price,
        streetAddress,
        // city,
        // state,
        // country,
        // zipcode,
      });
      console.log("Distributor Data Added Successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  //--------------update the data
  const handleUpdate = async (id) => {
    const updateData = doc(db, "distributorDetail", id);
    await updateDoc(updateData, {
      field1: name,
      field2: email,
      field3: phoneNumber,
      field4: productName,
      field5: productType,
      field6: price,
      field7: streetAddress,
      // field8: city,
      // field9: state,
      // field10: country,
      // field11: zipcode,
    });
    setShow(false);
  };

  return (
    <div className="fixed flex mt-[180px] w-[360px] h-[10px]  flex justify-center items-center  ">
      <div className=" bg-white rounded-lg  p-1 ">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Create New Distributor
          </h3>
          <button
            onClick={onClose}
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="crud-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        {/* ------------------ */}
        <form onSubmit={handleAddDistributor} class="p-4 md:p-5">
          <div class="grid gap-4 mb-4 grid-cols-2">
            {/* ----------- */}

            <div class="col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name Of Distributor
              </label>
              <input
                value={name}
                onChange={(e) => setDistributorName(e.target.value)}
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="phoneNumber"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="productName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                name="productName"
                id="productName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="productType"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Type
              </label>
              <input
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                type="text"
                name="productType"
                id="productType"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                value={price}
                onChange={(e) => setProductPrice(e.target.value)}
                type="number"
                name="price"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="streetAddress"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                type="text"
                name="streetAddress"
                id="streetAddress"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            {/* -------------- */}
            {!show ? (
              <button
                onClick={handleAddDistributor}
                type="submit"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Distributor
              </button>
            ) : (
              <button
                onClick={handleUpdate}
                type="submit"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default ModalDistributor;
