import React from 'react'
import '../css file/navbar.css'
import logo from'./Assets/logo.png'
import profile from './Assets/profile.jpg'
function NavBar() {
    return (
        <div className='navBar'>
            <img src={logo} alt="" className='logo' srcset="" /> 
            <div>
                <ul>
                    <li><i className="fa-solid fa-house"></i><a href="3#">Home</a></li>
                    <li><i className="fa-solid fa-magnifying-glass"></i><a href="3#">Explore</a></li>
                    <li><i className="fa-regular fa-bell"></i><a href="3#">Notifications</a></li>
                    <li><i className="fa-regular fa-envelope"></i><a href="3#">Messages</a></li>
                    <li><i className="fa-solid fa-bars"></i><a href="3#">Lists</a></li>
                    <li><img src={logo} alt="" /><a href="3#">Premium</a></li>
                    <li><i className="fa-regular fa-user"></i><a href="3#">Profile</a></li>
                </ul>
                
            </div>
            <button className='post'>Post</button>
            <div className='Profile'>
                
                <img src={profile} alt="" />
                <div>
                    <p className='Name'>osd drake</p>
                    <p className='userName'>@OsdFrake</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar
