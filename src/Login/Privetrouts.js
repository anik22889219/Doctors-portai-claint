import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useLocation, Navigate } from 'react-router-dom';
import Loddingbtn from './Loddingbtn';

const Privetrouts = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    
    if(loading){
        return <Loddingbtn></Loddingbtn>
    }
    if(!user){
       return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
    return children
};

export default Privetrouts;