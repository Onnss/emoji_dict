import React from 'react'

function Card(props) {
    return (  
        <div className='container card shadow-lg p-3 mb-5 bg-body rounded mt-5 w-25 mx-2'>
            <div style={{fontSize:'400%'}}>{props.emoji}</div>
            <div className='fw-bold fs-3' style={{color:'#2ec2b0'}}>{props.name}</div>
            <div>{props.description}</div>
        </div>
    );
}

export default Card;