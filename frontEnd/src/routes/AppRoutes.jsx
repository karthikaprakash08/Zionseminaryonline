import React from "react";
import { Route, Routes } from "react-router-dom";
import CourseList from "../Admin/pages/courses/CourseList";
import Profile from "../Components/Profile/Profile";
import Dashboard from "../Components/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin" element={<CourseList />} />
      <Route path="/profile" index element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
