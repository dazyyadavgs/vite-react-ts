
import {useNavigate } from 'react-router-dom'
import '../App.css'
const Sidebar = () => {
  
  const navigate=useNavigate();
  function gotoAdduserPage(){
    navigate('/AddUser');
  }
  function gotoAboutPage(){
    navigate('/About');
  }
  function gotoHomePage(){
    navigate('/');
  }



  return (
    <>
 
     <div className='h-screen bg-black w-1/6 space-y-2'>
       <h1 className='text-white cursor-pointer' onClick={gotoHomePage} >Home</h1>
       <h1 className='text-white cursor-pointer' onClick={gotoAdduserPage}>Add User</h1>
       <h1 className='text-white cursor-pointer' onClick={gotoAboutPage}>About</h1>
     </div>
 
    </>

  )
}

export default Sidebar

