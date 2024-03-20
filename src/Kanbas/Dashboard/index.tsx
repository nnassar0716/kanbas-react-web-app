import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
        }) {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              <hr />
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <button className="btn-add" onClick={addNewCourse} >
                Add
            </button>
            <button className="btn-update" onClick={updateCourse} >
                Update
            </button>
            <h2>Published Courses ({courses.length})</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <div className="card-icon">
                                    <BsThreeDotsVertical />
                                </div>
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}>
                                        {course.number} {course.name} </Link>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="card-text">
                                        {course.number}
                                    </Link>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="card-text">
                                        {course.startDate} thru {course.endDate}
                                    </Link>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn icon-button">
                                        <button className="btn icon-button" onClick={(event) => {
                                            event.preventDefault();
                                            setCourse({
                                                ...course,
                                            });
                                        }}>
                                            <FaRegEdit />
                                        </button>

                                        <button className="btn icon-button" onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                            <FaRegTrashAlt />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;