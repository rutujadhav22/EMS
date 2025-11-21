import { useContext, useState } from 'react'
import Login from './components/Auth/Login'
//  import { getLocalStorage,setLocalStorage } from './utils/localstorage'
import Admindashboard from './components/Dashboard/Admindashboard'
import Employeedashboard from './components/Dashboard/Employeedashboard'
import { AuthContext } from './context/AuthProvider'
import { useEffect } from 'react'



const App = () => {
  
    const [user,setUser]=useState(null)
    const [loggedInUserData,setLoggedInUserData]=useState(null)
    const [userData,setUserData]=useContext(AuthContext)
    

    useEffect(() => 
      {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
          const userData= JSON.parse(loggedInUser)
          setUser(userData.role);
          setLoggedInUserData(userData.data)
        }
        
      },[])
    
  
   


    const handleLogin=(email,password)=>{
      if(email==="admin1@gmail.com" && password==="rutu123"){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}) );
      }else if(userData ){
      const employee=userData.find((e)=>email===e.email && password===e.password)
      if(employee){
        setUser('employees')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}) );
      }
      
      
      }else{
      alert("Invalid credentials");
      }
    }

  
  // useEffect(() => {
  //   setLocalStorage()
      // getLocalStorage()
  // }, []);
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user==='admin' ? <Admindashboard changeUser={setUser} /> : <Employeedashboard changeUser={setUser} data={loggedInUserData}/>}
    </>
  )
}

export default App
