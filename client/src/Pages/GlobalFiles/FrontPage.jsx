import React, { useEffect } from 'react'
import { Table } from "antd";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserNurse } from "react-icons/fa";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import Sidebar from "./Sidebar";
import "./CommonCSS.css";
import { GetAllData, GetPatients } from '../../Redux/Data/action';
import { useDispatch, useSelector } from 'react-redux';


const FrontPage = () => {
  const columns = [
    { title: "Name", dataIndex: "patientName", key: "patientName" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
    { title: "Department", dataIndex: "department", key: "department" },
  ];

  const { patients } = useSelector((store) => store.data.patients);
  const {
    dashboard: { data },
  } = useSelector((store) => store.data);

  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPatients());
    dispatch(GetAllData());
  }, []);


  return (
    <div className="container">
      <Sidebar />
      <div className="AfterSideBar">
        
        <div className="maindiv">
          <div className="one commondiv">
            <div>
              <h1>{data?.doctor}</h1>
              <p>Doctor</p>
            </div>
            <FaUserDoctor className="overviewIcon" />
          </div>
          <div className="two commondiv">
            {" "}
            <div>
              <h1>{data?.nurse}</h1>
              <p>Nurse</p>
            </div>
            <FaUserNurse className="overviewIcon" />
          </div>
          <div className="three commondiv">
            <div>
              <h1>{data?.patient}</h1>
              <p>Patient</p>
            </div>
            <RiEmpathizeLine className="overviewIcon" />
          </div>
          <div className="four commondiv">
            {" "}
            <div>
              <h1>{data?.bed}</h1>
              <p>Beds</p>
            </div>
            <FaBed className="overviewIcon" />
          </div>

          <div className="five commondiv">
            {" "}
            <div>
              <h1>{data?.ambulance}</h1>
              <p>Ambulance</p>
            </div>
            <FaAmbulance className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.admin}</h1>
              <p>Admin</p>
            </div>
            <RiAdminLine className="overviewIcon" />
          </div>
        </div>
        {/* ************************************* */}
        <div className="patientDetails">
          <h1>Patient Details</h1>
          <div className="patientBox">
            <Table columns={columns} dataSource={patients} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontPage