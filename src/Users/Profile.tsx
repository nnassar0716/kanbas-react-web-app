import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css"

export default function Profile() {
    const [profile, setProfile] = useState({
        username: "", password: "",
        firstName: "", lastName: "", dob: "", email: "", role: "USER"
    });
    const navigate = useNavigate();
    const fetchProfile = async () => {
        const account = await client.profile();
        setProfile(account);
    };
    const save = async () => {
        await client.updateUser(profile);
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin");
    };

    useEffect(() => {
        fetchProfile();
    }, []);
    return (
        <div className="profile-container">
            <h1>Profile</h1>
            {profile && (
                <div className="profile-form">
                    <div className="form-group">
                        <input value={profile.username} onChange={(e) =>
                            setProfile({ ...profile, username: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input type="password" value={profile.password} onChange={(e) =>
                            setProfile({ ...profile, password: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input value={profile.firstName} onChange={(e) =>
                            setProfile({ ...profile, firstName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input value={profile.lastName} onChange={(e) =>
                            setProfile({ ...profile, lastName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input value={profile.dob} type="date" onChange={(e) =>
                            setProfile({ ...profile, dob: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input value={profile.email} onChange={(e) =>
                            setProfile({ ...profile, email: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <select value={profile.role} onChange={(e) =>
                            setProfile({ ...profile, role: e.target.value })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                    <button className="btn-primary" onClick={save}>
                        Save
                    </button>
                    <button className="btn-primary" onClick={signout}>
                        Signout
                    </button>
                    <Link to="/Kanbas/Account/Admin/Users"
                        className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
