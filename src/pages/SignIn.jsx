import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignIn() {
    const navigate = useNavigate();

    const { login, isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "https://serverless-api-teal.vercel.app/api/auth/signin",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {
                login(data.data.token, data.data.user);
                navigate("/");
            } else {
                setError(data.message);
            }
        } catch {
            setError("Something went wrong.");
        }

        setLoading(false);
    }

    return (
        <div>
            <h1>Party Menu</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button>
                    {loading ? "Signing in..." : "Sign In"}
                </button>

                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default SignIn;