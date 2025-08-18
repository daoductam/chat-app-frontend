import { Navigate } from "react-router-dom";
import { authService as result } from "../services/authService";

const ProtectedRoute = ({children}) => {
    const isAuthenticated = result.isAuthenticated;

    if(!isAuthenticated) {
        return <Navigate to='/login' replace/>
    } 

    return children;
};

export default ProtectedRoute;