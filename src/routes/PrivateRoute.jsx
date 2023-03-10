import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const { user, isInitialized } = useAuth();

    if (!isInitialized) {
        return (
            <></>
        )
    }
    if (!user) {
        return (
          <Navigate to="/login"/>
        )
    }
    else{
        return (
            children
          )
    }
}

export default PrivateRoute