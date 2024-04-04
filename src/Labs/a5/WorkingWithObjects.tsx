import React, { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Create a NodeJS server with ExpressJS",
        course: "CS572",
    });
    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
    const MODULE_URL = `${API_BASE}/a5/module`
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);
    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <button className="btn btn-primary" onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button className="btn btn-success" onClick={fetchAssignment} >
                Fetch Assignment
            </button>
            <br />
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <br />
            <a className="btn btn-success" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Toggle Completed
            </a>
            <input type="checkbox"
                onChange={(e) => setAssignment({
                    ...assignment,
                    completed: e.target.checked
                })}
                checked={assignment.completed} />
            <br />
            <a className="btn btn-warning" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input type="number"
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: Number(e.target.value)
                })}
                value={assignment.score} />
            <br />
            <a className="btn btn-danger" href={`${MODULE_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    name: e.target.value
                })}
                value={module.name} />
            <br />
            <a className="btn btn-primary" href={`${MODULE_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    description: e.target.value
                })}
                value={module.description} />
            <br />
            <h4>Retrieving Objects</h4>
            <a className="btn btn-primary"
                href="http://localhost:4000/a5/assignment">
                Get Assignment
            </a>
            <a className="btn btn-danger"
                href="http://localhost:4000/a5/module">
                Get Module
            </a>
            <h4>Retrieving Properties</h4>
            <a className="btn btn-primary"
                href="http://localhost:4000/a5/assignment/title">
                Get Title
            </a>
            <a className="btn btn-danger"
                href="http://localhost:4000/a5/module/name">
                Get Module Name
            </a>
        </div>
    );
}
export default WorkingWithObjects;