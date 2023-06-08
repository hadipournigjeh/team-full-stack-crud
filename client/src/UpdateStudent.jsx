import React, { useState } from 'react';
import './CreateStudent.css';
//import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  // const {id} = useParams();
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // // axios.put(""+id, {name,email})
    // .then(res => {
    //   console.log(res)
    //   navigate("/")
    // }).catch(err => console.log(err));
  }

  return (
    <div className='main-div'>
      <div className='form-card' >
        <form onSubmit={handleSubmit}>
          <h2>
            Update Student
          </h2>
          <div className='form-group'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' 
            onChange={e => setName(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control'
            onChange={e => setEmail(e.target.value)} />
          </div>
          <button className='btn'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateStudent;