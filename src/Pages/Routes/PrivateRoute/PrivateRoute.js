import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";


const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		// return <progress className="progress w-56"></progress>;
    return (
		<div className="flex items-center justify-center m-7 space-x-2">
			<div className="w-4 h-4 rounded-full animate-pulse bg-violet-500"></div>
			<div className="w-4 h-4 rounded-full animate-pulse bg-violet-500"></div>
			<div className="w-4 h-4 rounded-full animate-pulse  bg-violet-500"></div>
			<div className="w-4 h-4 rounded-full animate-pulse  bg-violet-500"></div>
		</div>
    );     
		
	}

	if (user) {
		return children;
	}

return (<Navigate to="/login" state={{ from: location }} replace></Navigate>
	);
};

export default PrivateRoute;
