

import React from 'react'

import { Navigate
 } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth';

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute : React.FC<ProtectedRouteProps> = ({children}) => {
 
    if(!isAuthenticated()){
        return <Navigate to="/signin" replace />;

    }
    return children;
}

export default ProtectedRoute;
