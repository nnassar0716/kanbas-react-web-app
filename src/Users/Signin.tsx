import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import './index.css';

export default function Signin() {
    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "", password: "", firstName: "", lastName: "", role: "USER"
    });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account/Profile");
    };
    return (
        <div className="signin-container">
            <h1>Signin</h1>
            <div className="input-group">
                <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) =>
                        setCredentials({ ...credentials, username: e.target.value })}
                    placeholder="Username"
                />
            </div>
            <div className="input-group">
                <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) =>
                        setCredentials({ ...credentials, password: e.target.value })}
                    placeholder="Password"
                />
            </div>
            <button onClick={signin}> Signin </button>
        </div>
    );
}
