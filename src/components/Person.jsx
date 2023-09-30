import React from 'react'
import profile from'./Assets/profile.jpg'
import '../css file/person.css'
function Person() {
return (
    <div className='Person'>
            <img src={profile} alt="" />
            <div>
                <p className='Name'>osd drake</p>
                <p className='userName'>@OsdFrake</p>
            </div>
            <button>
                Follow
            </button>
    </div>

)
}

export default Person
