import React, { useState } from 'react';
import './CreateStudent.css';
// import { Navigate, useNavigate } from 'react-router-dom';

function CreateStudent() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // // axios.post("", {name,email})
    // .then(res => {
    //   console.log(res)
    //   navigate("/")
    // }).catch(err => console.log(err));
  }

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
          <button className='btn'>Submit</button>
        </form>
      </div>
    </div>
  );
}


export default CreateStudent;