import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token ,setToken] = useState('')
    const [userLodding,setUserLodding]=useState(false)
    useEffect(()=>{
        const email = user?.user?.email
        const currentuser = {email : email}
        if (email){
            fetch(`https://doctors-portal-server-dufg.onrender.com/user/${email}`,{
                method : 'PUT',
                headers: {"Content-Type": "application/json" },
                body:JSON.stringify(currentuser)
            })
            .then(res => res.json())
            .then(data=>{
                // console.log(data)
                const accessToken = data.token
                localStorage.setItem('accessToken',accessToken)
                setToken(accessToken)})
                setUserLodding(true);
        }

    },[user]);
    return[token,userLodding];
};

export default useToken;
