import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { AuthUser, loading } = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(AuthUser){
        return children
    }
    return <Navigate to={`/logIn?${location.pathname}`} replace={true} />
};

export default PrivateRoutes;