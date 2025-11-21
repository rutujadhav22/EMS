import React, { useState } from "react";
import NewTask from "../Tasklist/NewTask";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
    

    const CreateTask = () => {

         const [userData,setUserData] = useContext(AuthContext)

        const [taskTitle,setTaskTitle]=useState('')
        const [description,setDescription]=useState('')
        const [taskDate,setTaskDate]=useState('')
        const [assignTo,setAssignTo]=useState('')
        const [category,setCategory]=useState('')
        
        const [newtask,setnewTasK] =useState({})


        const submitHandler = (e) => {
        e.preventDefault()
        // console.log(taskTitle,taskDate,description,assignTo,category)
        setnewTasK({taskTitle,taskDate,description,assignTo,category,active:false,newTask:true,completed:false,failed:false})
        const data=userData
        
        data.forEach(function(elem){
            
            if(assignTo === elem.firstName){
                elem.tasks.push(newtask)
                elem.taskNumbers.newtask = elem.taskNumbers.newtask + 1
                console.log(elem)

                 }

        })
        
        // localStorage.setItem('employees',JSON.stringify(data))
        setUserData(data)
        console.log(data);
        

        setTaskTitle('')
        setDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')

        

        }
    return (
        <div>
        <div className="p-8 bg-[#1c1c1c] mt-7  rounded">
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className="flex flex-wrap w-full  items-start justify-between">
            <div className="w-1/2">
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Task Title </h3>
                <input
                    value={taskTitle}
                    onChange={(e)=>setTaskTitle(e.target.value)}
                    className="text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                    type="text "
                    placeholder="make a ui design"
                />
                </div>
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                <input
                    value={taskDate}
                    onChange={(e)=>setTaskDate(e.target.value)}
                    className="text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                    type="date"
                />
                </div>
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                <input
                    value={assignTo}
                    onChange={(e)=>setAssignTo(e.target.value)}
                    className="text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                    type="text"
                    placeholder="employee name"
                />
                </div>
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                <input
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    className="text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                    type="text"
                    placeholder="design"
                />
                </div>
            </div>

            <div className="w-2/5 flex flex-col items-start">
                <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                <textarea
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="description"
                ></textarea>
                <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
                Create Task
                </button>
            </div>
            </form>
        </div>
        </div>
    );
    };

    export default CreateTask;
