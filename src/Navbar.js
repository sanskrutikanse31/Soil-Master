import { useState } from "react";
import ModalCrop from "./Admin/cropModal";
import ModalDistributor from "./Admin/distModal";
import { Link } from "react-router-dom";
import Search from "./User/search";
import Logout from "./Logout";

import PropTypes from 'prop-types';
function Navbar({ userRole }) {
  const [showCrop, setShowCrop] = useState(false);
  const [showDistributor, setShowDistributor] = useState(false);

  const handleOpenModalCrop = () => {
    setShowCrop(true);
  };

  const handleOpenModalDist = () => {
    setShowDistributor(true);
  };

  const handleCloseModalCrop = () => {
    setShowCrop(false);
  };

  const handleCloseModalDist = () => {
    setShowDistributor(false);
  };
  return (
    <>
      {/* navbar */}

      <nav className="bg-lime-300  border-green-200 ">
        <ul className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {userRole === 'admin' && (
          <>
          <li>
            {/* -----add crop detail button for admin */}

            <button
              onClick={handleOpenModalCrop}
              data-modal-target="crud-modal1"
              data-modal-toggle="crud-modal1"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Add Crop Details
            </button>
            {showCrop && <ModalCrop onClose={handleCloseModalCrop} />}
          </li>
          <li>
            {/* -----add distributor detail button for admin */}
            <button
              onClick={handleOpenModalDist}
              data-modal-target="crud-modal1"
              data-modal-toggle="crud-modal1"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Add Distributor Details
            </button>
            {showDistributor && (
              <ModalDistributor onClose={handleCloseModalDist} />
            )}
          </li>
          {/* <li>
            <Logout />
          </li> */}
          </>
          )}
          {/* ---------search functionality for user */}
          {userRole === 'user' && (
          <>
          <li>
            <Search />
          </li>

          {/* ---------view crop detail button for user */}
          <li>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-3"
            >
              <Link to="/viewCropDetail">
                <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  View Crop Detail
                </li>
              </Link>
            </button>
          </li>

          {/* ------view Distributor Detail */}

          <li>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-3"
            >
              <Link to="/viewDistributorDetail">
                <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  View Distributor Detail
                </li>
              </Link>
            </button>
          </li>
          

          {/* <li>
            <Logout />
          </li> */}
          </>
          )}
            <li>
            <Logout />
          </li>
        </ul>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  userRole: PropTypes.string.isRequired,
};
export default Navbar;
