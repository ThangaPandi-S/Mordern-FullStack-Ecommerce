import { assets } from "../assets/assets"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <img src={assets.logo} alt="log" className="mb-5 w-32" />
                <p className="w-full md:w-2/3 tg6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor consequatur, suscipit exercitationex.</p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 tg6">
                    <Link to='/'>Home</Link>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 tg6">
                    <li>+91 7603800000</li>
                    <li>support@Thasthara.com</li>
                </ul>
            </div>

        </div>
        <div className="  ">
                <hr className="border-gray-600"/>
                <p className="text-sm py-5 text-center">Copyright 2024@Thasthara.com - All Rights Reserved</p>
            </div>
        </div>

  )
}
//1.50
export default Footer