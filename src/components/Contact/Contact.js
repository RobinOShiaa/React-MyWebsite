import React,{useState} from 'react'
import './Contact.css'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { motion } from "framer-motion"


import emailjs from 'emailjs-com'

const Contact = (props) => {
  const { showContact, setShowContact } = props;
  const [firstName,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_g2g63wm', 'template_cgxwffl', e.target,'user_U4X4oBFJJCG0kCjV6SAR4')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent')
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
      setShowContact(false)
  }

  const dropIn = {
    hidden : {
      y: "-100vh",
      opacity: 0,
    },
    visible : {
      y: "0",
      opacity : 1,
      transition : {
        duration: 0.2,
        type : "spring",
        damping: 40,
        stiffness: 500,
      },
    },

    exit : {
      y: "100vh",
      opacity: 0,
    }
  }



  return (
    showContact ? 
      <motion.div id="c-form" initial={"hidden"} animate= {"visible"}  exit= {"exit"} variants={dropIn}>
          <AiOutlineCloseCircle size={42} type='button' className="contact-icon" onClick={() => setShowContact(false)}/>
          <div>
              <h3 className="title-start" >Contact me</h3>

          </div>
          <form onSubmit={handleSubmit} className="contact-form">
              <label for="">Name</label><br />
              <input className="name" type="text" placeholder="name"  name="name" onChange={e => setName(e.target.value)}/><br/>
              <label for="">Email</label><br />
              <input className="email" type="email" placeholder="email" name="email"  onChange={e => setEmail(e.target.value)}/><br/>
              <label for="">Message</label><br />
              <textarea className="message" cols="30" rows="10" placeholder="message" name="message"  onChange={e => setMessage(e.target.value)}></textarea><br />
              <button type="submit">Submit</button>
            
            

           </form>
       </motion.div> : null
    
      
  )

}


export default Contact;