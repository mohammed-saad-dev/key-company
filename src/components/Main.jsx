import React from 'react'
import '../css file/Main.css' 
function Main() {
    
return (
    <div className='Main'>

        <div className='flex'>
            <div className='form'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search'/>
            </div>
            <i class="fa-solid fa-gear"></i>
        </div>

        <div className='fashion'>
            <div className='title-fashion'>
                <p className='live'>Fashion . LIVE</p>
                <p className='paris'>Paris Fashion Week 2023</p>
            </div>
        </div>

        <div className='trends'>
            <p className='title-trends'>Trends for you</p>
        </div>
    </div>
    )
}

export default Main
