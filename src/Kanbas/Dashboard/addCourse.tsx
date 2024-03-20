import * as db from "../Database";
import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function addCourse() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.png", section: "Section",
        semester_id: "Semester ID",
        semester: "Semester Term",
        section_num: "Section Number",
    });
    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString(),
        };
        setCourses([...courses, { ...course, ...newCourse }]);
    };

    return (
        <div>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <input value={course.section} className="form-control"
                onChange={(e) => setCourse({ ...course, section: e.target.value })} />
            <input value={course.semester_id} className="form-control"
                onChange={(e) => setCourse({ ...course, semester_id: e.target.value })} />
            <input value={course.semester} className="form-control"
                onChange={(e) => setCourse({ ...course, semester: e.target.value })} />
            <input value={course.section_num} className="form-control"
                onChange={(e) => setCourse({ ...course, section_num: e.target.value })} />
            <button onClick={addNewCourse} >
                Add
            </button>
        </div>
    );
}

export default addCourse;