import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useLocation, Navigate } from 'react-router-dom';
import Loddingbtn from './Loddingbtn';
import useAdmin from '../hooks/useAdmin';

const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user)
    const location = useLocation()
    const [signOut] = useSignOut(auth);

    
    if(loading || adminLoading){
        return <Loddingbtn></Loddingbtn>
    }
    if(!user || !admin){
        signOut()
       return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
    return children
};

export default RequireAdmin;