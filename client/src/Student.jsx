import "./student.css";
import React, { useState } from "react"; //add useEffect when connecting server.
import studentData from "./exampleresponse.json";
import { Link } from "react-router-dom";
// import axios from "axios";  //Axios is already installed, no need to install again.

function Student() {
  const [student, setStudent] = useState(studentData);

  // TO BE ADDED WHEN SERVER IS SET UP:
  // useEffect(() => {
  //   fetch("http://localhost:8081/")
  //   .then((res) => res.json())
  //   .then((data) => setStudent(data.student))
  //   .catch((error) => console.log(error));
  // }, []);

  //this code is only until server is set up:
  function handleDelete(id) {
    const updatedStudents = student.filter((stu) => stu.id !== id);
    setStudent(updatedStudents);
  }

  // TO BE ADDED WHEN SERVER IS SET UP.
  // const  handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:8081/student/${id}`)
  //     window.location.reload()
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  return (
    <div className="main-div">
      <div className="card">
        <Link to="/create" className="btn add-btn">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th className="th">Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((student, index) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td className="button-data-table">
                  <Link to="/update/:id" className="btn update-btn">
                    Update
                  </Link>
                  <button
                    className="btn delete-btn"
                    onClick={(e) => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
