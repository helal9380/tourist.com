import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading) {
        return <div className="h-[80vh] flex justify-center items-center">
            <span className="loading text-[#007E8F] loading-bars loading-lg"></span>
        </div>
    }
    if(user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoute;