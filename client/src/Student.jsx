import './student.css';
import React from 'react';
import exampleresponse from './exampleresponse.json';

function Student() {
  const students = exampleresponse;

  return (
    <div className='main-div'>
      <div className='card'>
        <table className='table'>
          <thead>
            <tr>
              <th className='th'>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;