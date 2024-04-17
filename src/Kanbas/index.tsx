import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
// import * as db from "./Database";
import { useState, useEffect } from "react";
import axios from "axios";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";


const API_BASE = process.env.REACT_APP_API_BASE;
console.log(API_BASE);
function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const COURSES_API = `${API_BASE}/api/courses`;
    const addNewCourse = async () => {
        const response = await axios.post(COURSES_API, course);
        setCourses([...courses, response.data]);
    };
    const findAllCourses = async () => {
        const response = await axios.get(COURSES_API);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.png", section: "Section",
        semester_id: "Semester ID",
        semester: "Semester Term",
        section_num: "Section Number",
    });
    const deleteCourse = async (courseId: string) => {
        const response = await axios.delete(
            `${COURSES_API}/${courseId}`
        );
        setCourses(courses.filter(
            (c) => c._id !== courseId));
    };
    const updateCourse = async () => {
        const response = await axios.put(
            `${COURSES_API}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div style={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account/*" element={<Account/>} />
                        <Route path="Dashboard" element={<Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />} />
                        <Route path="Courses/:courseId/*" element={<Courses/>} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                        <Route path="Inbox" element={<h1>Inbox</h1>} />
                        <Route path="History" element={<h1>History</h1>} />
                        <Route path="Studio" element={<h1>Studio</h1>} />
                        <Route path="Commons" element={<h1>Commons</h1>} />
                        <Route path="Help" element={<h1>Help</h1>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;