import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
    const [error, setError] = useState("");
    const [user, setUser] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(user);
            navigate("/Kanbas/Account/Profile");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };
    return (
        <div className="profile-container">
            <h1>Signup</h1>
            {error && <div className="error-message">{error}</div>}
            <div className="profile-form">
                <div className="form-group">
                    <input
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <button onClick={signup}>Signup</button>
            </div>
        </div>
    );
}
