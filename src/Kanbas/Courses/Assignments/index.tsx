import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaSearch, FaCaretDown, FaCaretRight, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const [isListVisible, setIsListVisible] = useState(true);
    const toggleListVisibility = () => {
        setIsListVisible(prev => !prev);
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="searchBox">
                    <FaSearch className="searchIcon" />
                    <input
                        type="text"
                        placeholder="Search assignments..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="searchInput"
                    />
                </div>
                <div>
                    <button className="me-2 groupButton"><FaPlus/> Group</button>
                    <button className="me-2 assignmentsButton"><FaPlus/> Assignments</button>
                    <button className="me-2 groupButton"><FaEllipsisV/></button>
                </div>
            </div>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <ul className="list-group">
                        <div onClick={toggleListVisibility} style={{ cursor: 'pointer', userSelect: 'none' }}>
                            {isListVisible ? <FaCaretDown className="me-2" /> : <FaCaretRight className="me-2" />}
                            ASSIGNMENTS
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        {isListVisible && assignmentList.map((assignment) => (
                            <li className="list-group-item" key={assignment._id}>
                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                                </span>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>

        </>
    );
}
export default Assignments;
