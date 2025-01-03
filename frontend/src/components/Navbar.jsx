import { useContext, useState } from "react"
import {assets} from "../assets/assets"
import {Link ,NavLink } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const [visible,setVisible] = useState(false);
  const {setShowSearch} = useContext(ShopContext)
  return (
    <div className="flex item-center justify-between py-5 font-medium">

      <Link to='/'>
    <img src={assets.logo} className="w-36" alt="logo" /></Link>
    <ul className="hidden sm:flex items-center gap-5 text-sm text-gray-700">

    <NavLink to={'/'} className="flex flex-col items-center gap-1">
    <p>HOME</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
    </NavLink>
    <NavLink to={'/collection'} className="flex flex-col items-center gap-1">
    <p>COLLECTION</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
    </NavLink>
    <NavLink to={'/about'} className="flex flex-col items-center gap-1">
    <p>ABOUT</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
    </NavLink>
    <NavLink to={'/contact'} className="flex flex-col items-center gap-1">
    <p>CONTACT</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
    </NavLink>
    </ul>
    <div className="flex items-center gap-6">
    <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="search" />
    <div className="group relative">
        <img src={assets.profile_icon} className="w-5" alt="profile" />
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
        <div className="flex flex-col gap-2 w-36 py-3 px-8 bg-slate-100 text-gray-500 rounded">
            <p className="cursor-pointer hover:text-black">My Profile</p>
            <p className="cursor-pointer hover:text-black">Orders</p>
            <p className="cursor-pointer hover:text-black">Logout</p>

        </div>
        </div>
    </div>
    <Link to='/cart' className="relative">
    <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
    <p className="absolute right-[-13px] bottom-[-11px]  leading-4 text-center  bg-black text-white aspect-square rounded-full p-1  text-[15px]">10</p>
    </Link>
    <img onClick={()=>setVisible((prev)=>!prev)} src={assets.menu_icon} alt="menu" className="w-5 cursor-pointer sm:hidden"/>
    </div>

    {/* SideBar Menu for small screen  */}
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
    <div className="flex flex-col text-gray-700">

      {/* back button */}
    <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
      <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
      <p>Back</p>
    </div>
    {/* content - sideNavbar */}
    <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/'>HOME</NavLink>
    <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/collection'>COLLECTION</NavLink>
    <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/about'>ABOUT</NavLink>
    <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/contact'>CONTACT</NavLink>


    </div>

    </div>

    </div>
  )
}

export default Navbar