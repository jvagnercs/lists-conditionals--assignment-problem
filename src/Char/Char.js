import React from 'react'
import "./Char.css"

const Char = props => {

    return (
        <p 
            className='char'
            onClick={props.clicked}
        >
            {props.singleCh}
        </p>
    )
}

export default Char