import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Admin/AdminDashboard";
import AddCrop from "./Admin/cropTable";
import CropCard from "./User/cropCard";
import DistributorCard from "./User/distCard";
import AddDistributor from "./Admin/distTable";
import Home from "./User/home";
import NavBar from "./Navbar";
import CropInfo from "./User/cropInfo";
import Login from "./Login"
import Register from "./Register";
const App = () => {

  // 1. ADMIN/USER
  /* useEffect(token) */
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/admin-dashboard" element={<Dashboard />} exact />
        <Route path="/add-crop" element={<AddCrop />} />
        <Route path="/add-distributor" element={<AddDistributor/>} />
        <Route path="/viewCropDetail" element={<CropCard/>}/>
        <Route path="/viewDistributorDetail" element={<DistributorCard/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="navbar" element={<NavBar/>}/>
        <Route path="crop-info" element={<CropInfo/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;