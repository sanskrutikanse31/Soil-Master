// import React, { useState, useEffect } from "react";
// import {db} from "../Admin/firebaseInit";    //curly braces is bcoz we are using named export for db

const CropInfo = ({someProp}) => {


  return (
    <>
    <div className="bg-[pink] h-scree">


  <header className="bg-[pink] h-scree py-4">
    <h1 className="text-3xl font-bold text-center">{someProp} Information</h1>
  </header>

  <main className="max-w-4xl mx-auto p-4 pt-6 md:p-6 lg:p-12">
    
  <div class="flex justify-center -translate-y-10">
    <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 mb-3" src={"https://firebasestorage.googleapis.com/v0/b/soil-master-210f1.appspot.com/o/soil_pro-wheat%20img.jpg?alt=media&token=37584dc7-1edc-4910-a375-ea9f7aa57e3d"}/>
</div>
    <p className="text-lg -translate-y-6">Wheat is a type of grain that is widely cultivated and consumed around the world. It is a good source of carbohydrates, fiber, and nutrients like iron and selenium.</p>

    <table className="w-full mb-6">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left bg-gray-100">Characteristic</th>
          <th className="px-4 py-2 text-left bg-gray-100">Value</th>
        </tr>
      </thead>
     
  <tbody>
    <tr>
      <td className="px-4 py-2 border-b border-gray-200">Crop Name</td>
      <td className="px-4 py-2 border-b border-gray-200">Jowar</td>
    </tr>
   
    <tr>
      <td className="px-4 py-2 border-b border-gray-200">Aeration</td>
      <td className="px-4 py-2 border-b border-gray-200">Good</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b border-gray-200">Clay Proportion</td>
      <td className="px-4 py-2 border-b border-gray-200">High clay content</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b border-gray-200">Drainage</td>
      <td className="px-4 py-2 border-b border-gray-200">Good</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b border-gray-200">Nutrient Requirement</td>
      <td className="px-4 py-2 border-b border-gray-200">High nitrogen and phosphorus requirement</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b border-gray-200">pH Range</td>
      <td className="px-4 py-2 border-b border-gray-200">5.5 to 6.5</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b border-gray-200">Soil Type</td>
      <td className="px-4 py-2 border-b border-gray-200">Well-draining soil</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b border-gray-200">Temperature Range</td>
      <td className="px-4 py-2 border-b border-gray-200">20°C to 35°C</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b border-gray-200">Water Holding Capacity</td>
      <td className="px-4 py-2 border-b border-gray-200">Low</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b border-gray-200">Water Table</td>
      <td className="px-4 py-2 border-b border-gray-200">Adequate moisture, especially during germination and grain formation</td>
    </tr>
  </tbody>

    </table>
  </main>

    </div>
    </>
  );
};

export default CropInfo;