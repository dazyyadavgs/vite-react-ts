
import {FaBars} from 'react-icons/fa';
type NavbarProps = {
  setSidebarToggle: () => void;
};
const Navbar = ({setSidebarToggle}:NavbarProps) => {


  return (
        
    <div className='w-full h-6 bg-gray-400'>
        <div className='px-3 py-1'>
            <FaBars className='cursor-pointer text-slate-950' onClick={setSidebarToggle}/>
      </div>
    </div>
  )
}

export default Navbar
