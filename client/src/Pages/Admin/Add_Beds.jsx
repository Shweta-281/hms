// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Sidebar from '../GlobalFiles/Sidebar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { AddBed } from "../../Redux/Data/action"
import { Navigate } from 'react-router-dom';
const notify = (text) => toast(text);

const Add_Beds = () => {
  const { data } = useSelector((store) => store.auth);

  const InitData = {
    roomNumber: "none",
    bedNumber: "",
    occupied: "available",
  };
  const [BedData, setBedData] = useState(InitData);

  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const HandleAmbuChange = (e) => {
    setBedData({
      ...BedData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleAmbuSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    dispatch(AddBed(BedData));
    setloading(false);
    setBedData(InitData);
    notify("Bed Added");
  };

  if (data?.isAuthticated === false) {
    return <Navigate to={"/login"} />;
  }

  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }

  
  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="mainAmbupance">
            <h1>Add Beds</h1>

            {/* ******************************************************** */}
            <form onSubmit={HandleAmbuSubmit}>
              <div>
                <label>Bed Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="bed No"
                    name="bedNumber"
                    value={BedData.bedNumber}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Room Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="room no"
                    name="roomNumber"
                    value={BedData.roomNumber}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="formsubmitbutton">
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Add_Beds