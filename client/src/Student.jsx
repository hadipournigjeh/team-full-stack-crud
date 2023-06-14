import "./student.css";
import React, { useEffect, useState } from "react"; //add useEffect when connecting server.
//import studentData from "./exampleresponse.json";
import { Link } from "react-router-dom";
// import axios from "axios";  //Axios is already installed, no need to install again.

function Student() {
  const [student, setStudent] = useState([]);

  //show list of student
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((error) => console.log(error));
  }

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
                  <Link to={`/update/${student.id}`} className="btn update-btn">
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
