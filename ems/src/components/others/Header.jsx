// import React, { useState } from 'react'
// import { useEffect } from 'react'

const Header = (props) => {


    // const [username,setUsername] = useState('')
    // useEffect(() => {
    //     if (!data) {
    //     setUsername('Admin');
    //     } else {
    //     setUsername(data.firstName);
    //     }
    //     }, [data]);  // runs only when "data" changes
    
    const logOutUser=()=>{
        

        localStorage.setItem('loggedInUser','');
        props.changeUser('');
        // window.location.reload();
    }

return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>
            Hello <br />
            <span className='text-3xl font-semibold'>{props?.firstName || "Admin"}</span>
        </h1>
        <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-4 py-2 rounded-small'>Log Out</button>
    </div>
)
}

export default Header
