import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";


export default function ToCheck(token) {
    try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp < now) {
            localStorage.clear();
            return <Navigate to="/login" replace />;
        }
    } catch (error) {
        localStorage.clear()
         return <Navigate to="/login" replace />;
    }
}

