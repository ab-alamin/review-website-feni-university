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
        <div>
             <h2 className="bg-secondary text-white">We Have 7 Department In Our University. <br />
             One By One The Students Were Given Information:{students.length}</h2>
             <div className="student-container">
        {
           students.map(student => <Student
           key={student._id}
           student={student}
           ></Student>) 
        }
        </div>
            
        </div>
    );
};

export default Students;