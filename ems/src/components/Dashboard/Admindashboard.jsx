import React from 'react'
import Header from '../others/header'
import CreatTask from '../others/CreateTask'
import Alltask from '../others/Alltask'
const Admindashboard = (props) => {
  return (
    <div className='h-screen w-full p-2'>
      <Header changeUser={props.changeUser}/>
      <CreatTask />
      <Alltask />

    </div>
  )
}

export default Admindashboard
