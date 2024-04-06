/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react'
import Sidebar from '../GlobalFiles/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAppointment, GetAllAppointment } from '../../Redux/Data/action';
import { Navigate } from 'react-router-dom';

const Check_Appointment = () => {

  const { data } = useSelector((store) => store.auth);

  const disptach = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const columns = [
    { title: "Patient Name", dataIndex: "patientName", key: "patientName" },
    { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Date", dataIndex: "date", key: "date" },
  ];

  const AllAppointment = useSelector((state) => state.data.Appointments);

  const DeleteAppoint = (id) => {
    disptach(DeleteAppointment(id));
  };
  useEffect(() => {
    disptach(GetAllAppointment());
  }, []);

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "doctor") {
    return <Navigate to={"/dashboard"} />;
  }


  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>Appointment Details</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Mobile</th>
                    <th>Disease</th>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Resolve</th>
                  </tr>
                </thead>
                <tbody>
                  {AllAppointment?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.patientName}</td>
                        <td>{ele.mobile}</td>
                        <td>{ele.disease}</td>
                        <td>{ele.department}</td>
                        <td>{ele.date}</td>
                        <td>
                          <button
                            style={{
                              border: "none",
                              color: "red",
                              outline: "none",
                              background: "transparent",
                              cursor: "pointer",
                            }}
                            onClick={() => DeleteAppoint(ele._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Check_Appointment