import { courses, modules } from "../../Kanbas/Database";
import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css";
import { FaAngleRight } from "react-icons/fa";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {
    const { courseId } = useParams();
    const COURSES_API = `${API_BASE}/api/courses`;
    const [course, setCourse] = useState<any>({ _id: "" });
    const findCourseById = async (courseId?: string) => {
        const response = await axios.get(
            `${COURSES_API}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    const location = useLocation();
    const module = modules.find((module) => module.course === courseId);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    const courseNumber = module ? module.course : 'defaultCourseNumber';

    const routeNameMap = {
        [`/Kanbas/Courses/${courseNumber}/Home`]: 'Home',
        [`/Kanbas/Courses/${courseNumber}/Modules`]: 'Modules',
        [`/Kanbas/Courses/${courseNumber}/Piazza`]: 'Piazza',
        [`/Kanbas/Courses/${courseNumber}/Assignments`]: 'Assignments',
        [`/Kanbas/Courses/${courseNumber}/Grades`]: 'Grades',
        [`/Kanbas/Courses/${courseNumber}/Zoom Meetings`]: 'Zoom Meetings',
        [`/Kanbas/Courses/${courseNumber}/People`]: 'People',
        [`/Kanbas/Courses/${courseNumber}/Panopto Video`]: 'Panopto Video',
        [`/Kanbas/Courses/${courseNumber}/Discussions`]: 'Discussions',
        [`/Kanbas/Courses/${courseNumber}/Announcments`]: 'Announcments',
        [`/Kanbas/Courses/${courseNumber}/Pages`]: 'Pages',
        [`/Kanbas/Courses/${courseNumber}/Outcomes`]: 'Outcomes',
        [`/Kanbas/Courses/${courseNumber}/Rubrics`]: 'Rubrics',
        [`/Kanbas/Courses/${courseNumber}/Collaborations`]: 'Collaborations',
        [`/Kanbas/Courses/${courseNumber}/Syllabus`]: 'Syllabus',
        [`/Kanbas/Courses/${courseNumber}/Settings`]: 'Settings',
    };

    const currentPageName = routeNameMap[location.pathname];
    console.log(location.pathname);
    console.log(currentPageName);

    return (
        <div>
            <h1 className="header">
                <button type="button" className="icon" onClick={toggleNavVisibility}>
                    <HiMiniBars3 />
                </button>
                {course ? `${course.number}` : 'Loading...'} {<FaAngleRight />} {currentPageName}
            </h1>
            <hr />
            <div className="courseContent">
                <div className={`courseNavigation ${isNavVisible ? 'courseNavigationVisible' : ''}`}>
                    <CourseNavigation />
                </div>
                <div
                    className="overflow-y-scroll"
                    style={{ flexGrow: 1, height: '100vh', top: '50px', marginLeft: '20px' }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                        <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;