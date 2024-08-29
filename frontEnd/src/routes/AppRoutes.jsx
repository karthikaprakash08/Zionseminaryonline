import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseList from '../Admin/pages/courses/CourseList'
import Profile from '../Components/Profile/Profile'
import Dashboard from '../Components/Dashboard'
import AllCourses from '../Admin/pages/courses/AllCourses'
import AddnewCourse from '../Admin/pages/courses/new-course/AddnewCourse'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path='/admin' element={<AllCourses />} />
            <Route path='/admin/courses/new' element={<AddnewCourse />} />
            <Route path="/profile" index element={<Profile />}/>
        </Routes>
    )
}

export default AppRoutes