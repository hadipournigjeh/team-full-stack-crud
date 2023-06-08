
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateStudent.css';


function CreateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudentData = { name, email };

    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudentData),
    })
      .then((response) => {
        if (response.ok) {
          // Assuming successful creation, you can perform any necessary actions here
          console.log("Student created successfully");
          navigate("/"); // Redirect to home page or desired route
        } else {
          throw new Error("Failed to create student");
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.log("Error creating student:", error);
      });
  };

  return (

    <div className='main-div'>
      <div className='form-card'>
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter Name'
              className='form-control'

              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder='Enter Email'
              className='form-control'

              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}



export default CreateStudent;

