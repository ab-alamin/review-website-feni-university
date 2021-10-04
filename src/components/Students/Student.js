import React from 'react';

const Student = (props) => {
    const {_id, name,department, phone, picture,address} = props.student;
    const studentStyle = {
        border: '3px solid goldenrod',
        padding:'10px',
        borderRadius: '10px'
    };
    return (
        <div style={studentStyle}>
            <h2>I am:{name}</h2>
            <p>Id: {_id}</p>
            <h2>Department:{department}</h2>
            <h5>Call me:{phone}</h5>
            <img className="studen-image img-fluid" src={picture} alt="" />
            <p><small>I live in:{address}</small></p>


        </div>
    );
};

export default Student;

