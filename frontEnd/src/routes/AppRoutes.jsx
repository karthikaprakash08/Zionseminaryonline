import { Route, Routes } from "react-router-dom";
import CourseList from "../Admin/pages/courses/CourseList";
import Profile from "../Components/Profile/Profile";
import Dashboard from "../Components/Dashboard";
import Courses from "../Components/Courses/Courses";
import Enrolled from "../Components/Enrolled/Enrolled";
import Home from "../Components/Home/Home";
import AddnewCourse from "../Admin/pages/courses/new-course/AddnewCourse";
import AllCourses from "../Admin/pages/courses/AllCourses";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" index element={<Dashboard />} /> */}

      <Route path="/" element={<Dashboard />}>
        <Route path="" index element={<Home />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/enrolled" element={<Enrolled />} />
      </Route>
      <Route path="/admin" element={<AllCourses />} />
      <Route path="/admin/courses/new" element={<AddnewCourse />} />
    </Routes>
  );
};

export default AppRoutes;
