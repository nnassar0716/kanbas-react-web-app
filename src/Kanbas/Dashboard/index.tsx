import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaRegEdit } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses (3)</h2> <hr />
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
                                        {course.number} {course.section} {course.name}</Link>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="card-text">
                                        {course.number}.{course.section}.{course.semester_id}
                                    </Link>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="card-text">
                                        {course.semester_id}_{course.section_num} {course.semester}
                                    </Link>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn icon-button">
                                        <FaRegEdit />
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