import React from 'react'

const Validation = props => {
    return props.charCount > 5 ?
        <p>Text long enough</p> :
        <p>Text too short</p>
}

export default Validation