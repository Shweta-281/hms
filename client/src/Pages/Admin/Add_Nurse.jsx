
import React, { useState } from 'react'
import Sidebar from '../GlobalFiles/Sidebar'
import nurse from "../../assets/nurseavatar.png"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { NurseRegister, SendPassword } from '../../Redux/auth/action';
const notify = (text) => toast(text);

const Add_Nurse = () => {
  const { data } = useSelector((store) => store.auth);
   

  const [loading, setLoading] = useState(false);

  const InitData = {
    nurseName: "",
    age: "",
    mobile: "",
    email: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    department: "",
    nurseID: Date.now(),
    password: "",
    bloodGroup: "",
  };
  const [NurseValue, setNurseValue] = useState(InitData);

  const HandleDoctorChange = (e) => {
    setNurseValue({ ...NurseValue, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const HandleDoctorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try{
    
    const res = await dispatch(NurseRegister(NurseValue));
    console.log(res);
      if (res.message === "Nures already exists") {
        setLoading(false);
        return notify("Nurse Already Exist");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Something went wrong, Please try Again");
      }
      notify("Nurse Added");

      alert(`Your Nurse ID, please save it ${res.data.nurseID}`)

      let data = {
        email: res.data.email,
        password: res.data.password,
        userId: res.data.nurseID,
      };

      console.log(data, "NURSE REGISTER SUCCESSFULLY");
      await dispatch(SendPassword(data));
      setLoading(false);
      setNurseValue(InitData);

    } catch(error){
      console.error("Error:", error);
      setLoading(false);
      notify("Something went wrong, Please try Again");
    }
  };

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
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
          <div className="Main_Add_Doctor_div">
            <h1 style={{color:"rgb(27, 55, 241)"}}>Add Nurse</h1>
            <img src={nurse} alt="doctor" className="avatarimg" />
            <form onSubmit={HandleDoctorSubmit}>
              <div>
                <label>Nurse Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="nurseName"
                    value={NurseValue.nurseName}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={NurseValue.age}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label>Contact Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Emergency Number"
                    name="mobile"
                    value={NurseValue.mobile}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc.com"
                    name="email"
                    value={NurseValue.email}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    value={NurseValue.gender}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Birthdate</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    name="DOB"
                    value={NurseValue.DOB}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={NurseValue.address}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Education</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="eg.MBBS"
                    name="education"
                    value={NurseValue.education}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="bloodGroup"
                    value={NurseValue.bloodGroup}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Blood Group">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Password</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={NurseValue.password}
                    onChange={HandleDoctorChange}
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

export default Add_Nurse