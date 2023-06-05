import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const UpdateStudent = { name, email };
    fetch(`http://localhost:5000/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateStudent),
    })
      .then((response) => {
        if (response.ok) {
          // Assuming successful update, you can perform any necessary actions here
          console.log("Student updated successfully");
          navigate("/"); // Redirect to home page or desired route
        } else {
          throw new Error("Failed to update student");
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.log("Error updating student:", error);
      });
  }

  return (
    <div className="main-div">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;
