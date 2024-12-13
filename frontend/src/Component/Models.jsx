import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { toast } from 'react-toastify';

const Models = (props) => {
  const [formData, setFormData] = useState({ userEmail: "", message: ""});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending form data to the backend
      await axios.post("https://portfolio-1-yema.onrender.com/sendemail", formData);
      toast.success("Email sent successfully!");
      setFormData({ userEmail: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Error sending email");
    }
  };
  return (
    <div >
         <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className='model_' >
      <Modal.Header closeButton className='model_body'>
        <Modal.Title id="contained-modal-title-vcenter" >
        <h2 className='model_label'> Hello 👋</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='model_body'>
      <form id="emailForm" style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit}>

        <label for="email" className='model_label'>Enter your email:</label>
        <input type="email" id="email" name="userEmail" value={formData.userEmail} onChange={handleChange} required placeholder='example@gmail.com'/>

        <label for="message" className='model_label'>Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" cols="30"  style={{marginBottom:"50px"}}></textarea>

        <button type="submit" style={{width:"100px",position:"absolute",bottom:"0px",right:"15px",marginBottom:"5px"}} className='model_btn'>Send Email</button>
    </form>
      </Modal.Body>
      
    </Modal>
    </div>
  )
}

export default Models
