import React from "react";
import "./courses.css";
import CourseList from "./CourseList";
import Sidebar from "../../components/global/sidebar/LeftBar";

const AllCourses = () => {
  return (
    <div className="courses-page">
      <Sidebar />
      <CourseList/>
    </div>
  );
};

export default AllCourses;
