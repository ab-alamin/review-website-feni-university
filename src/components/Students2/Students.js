import React, { useEffect, useState } from 'react';
import Student from '../Students/Student';
import './Students.css';

const Students = () => {
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        fetch("./student.json")
        .then(res=> res.json())
        .then(data=>setStudents(data));
    },[])
    return (
        <div className="student-container">
        <h2>I have friends:{students.length}</h2>
        <div className="friend-container">
        {
           students.map(friend => <Student
           key={students._id}
           student={students}
           ></Student>) 
        }
        </div>
            
        </div>
    );
};

export default Students;