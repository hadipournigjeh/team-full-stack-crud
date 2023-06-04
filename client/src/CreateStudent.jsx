import React, { useState } from 'react';
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
      <div className='card' >
        <form onSubmit={handleSubmit}>
          <h2>
            Add Student
          </h2>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' 
            onChange={e => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control'
            onChange={e => setEmail(e.target.value)} />
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateStudent;