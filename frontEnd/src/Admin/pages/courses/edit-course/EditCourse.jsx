import React from "react";
import Edit from "./Edit";
import { useLocation } from "react-router-dom";
import Sidebar from "../../../../Components/Sidebar/Sidebar";

const EditCourse = () => {
  const data = useLocation().state;
  console.log(data)
  return (
    <div className="courses-page">
      <Sidebar />
      <Edit courseDetails={data} />
    </div>
  );
};

export default EditCourse;
