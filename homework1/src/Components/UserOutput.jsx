import React from 'react';

const UserOutput = (props) => {
    return (
        <p style={{border: "1px solid gray", borderRadius: "10px", padding: "20px", margin: '15px',}}>{props.username}</p>
    )
}

export default UserOutput;