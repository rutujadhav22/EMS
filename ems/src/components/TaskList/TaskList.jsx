import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './Completetask'
import FailedTask from './Failedtask'
const TaskList = ({data}) => {
  
  return (
    <div id='tasklist' className='h-[55%] flex items-center overflow-x-auto justify-start flex-nowrap gap-10 w-full py-5 px-5 bg--500 mt-10'>
        {data?.tasks?.map((elem,idx) => {
          if(elem.active){
            return <AcceptTask key={idx} data={elem} />
          }
          if(elem.newTask){
            return <NewTask  key={idx} data={elem}/>
          }
          if(elem.completed){
            return <CompleteTask key={idx} data={elem}/>
          }
          if(elem.failed){
            return <FailedTask key={idx} data={elem}/>
          }

        }


        )}

        
        
        
 
      
      

    </div>
    
  )
}

export default TaskList
