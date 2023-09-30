import React from 'react'
import '../css file/People.css'
import Person from './Person'
function People() {
return (
    <div className='People'>
        <div className='Suggestions'>
            <p className='title-people'>Who to follow</p>
            <Person/>
            <Person/>
            <Person/>
            <a href="#3">Show more</a>
        </div>
    </div>
)
}

export default People
