import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("party_menu_token"));

    useEffect(() => {
        const storedUser = localStorage.getItem("party_menu_user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (token, user) => {
        localStorage.setItem("party_menu_token", token);
        localStorage.setItem("party_menu_user", JSON.stringify(user));

        setToken(token);
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem("party_menu_token");
        localStorage.removeItem("party_menu_user");

        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                isAuthenticated: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}