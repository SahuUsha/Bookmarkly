


import type { ReactNode } from 'react';
import { Navigate} from 'react-router-dom'
import { isAuthenticated } from '../utils/auth';

interface ProtectedRouteProps {
   children: ReactNode;
}

const ProtectedRoute : React.FC<ProtectedRouteProps> = ({children}) => {
 
    if(!isAuthenticated()){
        return <Navigate to="/signin" replace />;

    }
    return children;
}

export default ProtectedRoute;
