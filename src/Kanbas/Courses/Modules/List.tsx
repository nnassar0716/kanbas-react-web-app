import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
    return (
        <>
            <div className="d-flex justify-content-end" style={{ padding: "20px" }}>
                <button className="me-2">Collapse All</button>
                <button className="me-2">View Progress</button>
                <select className="me-2">
                    <option>Publish All</option>
                    <option>Publish All Modules and Items</option>
                    <option>Publish Modules Only</option>
                    <option>Unpublish All</option>
                </select>
            </div>
            <ul className="list-group wd-modules">
                <li className="list-group-item module-list-item">
                    <div className="input-group">
                        <input placeholder="New Module" className="module-input" value={module.name}
                            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                        />
                        <textarea
                            className="module-textarea"
                            placeholder="New Description"
                            value={module.description}
                            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                        />
                    </div>
                    <button className="btn-add" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                    <button className="btn-update" onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                </li>
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>
                            <div className="edit-delete-buttons">
                                <button
                                    className="btn-edit me-1"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(setModule(module));
                                    }}>
                                    Edit
                                </button>
                                <button
                                    className="btn-delete"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(deleteModule(module._id));
                                    }}>
                                    Delete
                                </button>
                            </div>
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: any, index: number) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;