import { useEffect, useState } from "react";
import { db } from '../../src/FirebaseInit';
import { getDocs, collection } from "@firebase/firestore";

function DistributorCard() {
  const [distData, setDistData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const distRef = collection(db, "distributorDetail");
      const snapShot = await getDocs(distRef);
      const dist = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setDistData(dist);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {distData.map((dist) => (
        <div
          key={dist.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
        >
          
            <div>
              <img
                className="rounded-t-lg"
                src={"https://firebasestorage.googleapis.com/v0/b/soil-master-210f1.appspot.com/o/distributor.jpg?alt=media&token=48abf40f-1bf1-4eb1-b188-a659358dee3f"}
                alt=""
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {dist.name}
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {dist.email}
              </p>
            </div>
          
         
        </div>
      ))}
    </div>
  );
}

export default DistributorCard;