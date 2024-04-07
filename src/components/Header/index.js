
import './index.css'

import { FaBars } from "react-icons/fa6"

import { FaCircleUser } from "react-icons/fa6"

const Header = () => (
    <div className="Header-container">
        <div className="bars-holder">
            <FaBars size="15" color="#ffffff"/>
            <h1 className="nav-text">ACCA home</h1>
        </div>
        <div className="links-holder">
            <h1 className="nav-text">NavLink1</h1>
            <h1 className="nav-text">NavLink2</h1>
            <h1 className="nav-text">NavLink3</h1>
            <h1 className="nav-text">NavLink4</h1>
        </div>
        <div className='login-holder'>
            <FaCircleUser size="15" color="#301934"/>
            <p className="login-text">Login/Sign Up</p>
        </div>
    </div>
)

export default Header