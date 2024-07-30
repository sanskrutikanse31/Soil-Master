import { useEffect, useState } from "react";
import { db } from '../../src/FirebaseInit';
import { getDocs, collection } from "@firebase/firestore";
import { Link } from "react-router-dom";
import CropInfo from "./cropInfo";

function CropCard() {
  const [cropData, setCropData] = useState([]);
  const [showCropInfo, setShowCropInfo] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const cropRef = collection(db, "cropDetail");
      const snapShot = await getDocs(cropRef);
      const crops = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setCropData(crops);
    }
    fetchData();
  }, []);


  const handleReadMoreClick = () => {
    setShowCropInfo(true);
  };

  return (
    <>
    <CropInfo someProp={cropData} />
    <div className="grid grid-cols-3 gap-5 ">
      {cropData.map((crop) => (
        <div
          key={crop.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative hover:rotate-"
        >
          
            {/* <a href="#">
              <img
                className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                src={"https://firebasestorage.googleapis.com/v0/b/soil-master-210f1.appspot.com/o/soil_pro-wheat%20img.jpg?alt=media&token=37584dc7-1edc-4910-a375-ea9f7aa57e3d"}
                alt=""
              />
            </a> */}
            <a href="#">
            <img
              className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src={crop.imageUrl || "https://via.placeholder.com/200"} // Use crop image URL or a placeholder
              alt={crop.cropName} // Use crop name as alt text
            />
          </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {crop.cropName}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {crop.cropDesc}
              </p>
            </div>
          
           
            <button onClick={handleReadMoreClick} 
            type="button"
             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <Link to="/crop-info">Read More</Link>
           </button>
            {showCropInfo && <CropInfo />}
        </div>
      ))}
    </div>
    </>
  );
}

export default CropCard;