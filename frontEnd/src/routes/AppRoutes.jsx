import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseList from '../Admin/pages/courses/CourseList'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<CourseList />} />
        </Routes>
    )
}

export default AppRoutes