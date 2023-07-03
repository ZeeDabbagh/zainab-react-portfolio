import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Flower from '../../assets/images/flowers-2.jpeg'

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormInput = (e) => {
    console.log("hfi")
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      console.log("hfi>if email")
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleEmailBlur = () => {
    //console.log("heb")
    const debug = {
      emailLength: email.length,
      validateEmailResult :  validateEmail(email)
    }
    console.log("***debug email input***")
    console.log(debug)

    if (email.length>0 && !validateEmail(email)) {
        setErrorMessage('Your email is invalid')
        console.log("heb>if>error")
      } else {
        setErrorMessage('');
        console.log("heb>if>ok")
    }
}

const handleMessageBlur = () => {
  if (!message) {
      setErrorMessage(
          `Message is required`)
  } else {
      setErrorMessage('');
  }
}
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage(
        `The email you used is invalid, please use a valid email for ${name}`
      );
      return;
    }



    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div>

      <form className='mx-2' style={{border: 'grey solid', borderRadius: '5px', backgroundImage:`url(${Flower})`, opacity:'0.9', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition: 'center'}}>
        <div>
              <h3 className='mx-auto my-2' style={{width: '200px', color:'white', backgroundColor:'rgba(0,0,0,0.8)', borderRadius:'20px', textAlign:'center'}}> Say Hello! </h3>
      <hr></hr>  
        </div>

        <div className='form-row mx-auto' style={{width:'200px'}}>
          <div className='col-md-4 mb-3'>
            <label style={{color:'whitesmoke', backgroundColor:'rgba(0,0,0,0.5'}}>Name </label>
            <input 
            name="name"
            type='text'
            placeholder='Full name'
            value={name}
            onChange={handleFormInput}
            style={{width: '400px'}}
            />
          </div>
        </div>
        <div className='form-row mx-auto' style={{width:'200px'}}>
          <div className='col-md-4 mb-3'>
          <label style={{color:'whitesmoke', backgroundColor:'rgba(0,0,0,0.5'}}>Email </label>
            <input 
            name="email"
            type='text'
            placeholder='Email'
            onChange={handleFormInput}
            onBlur={handleEmailBlur}
            style={{width: '400px'}}
            />
          </div>
        </div>
        <div className='form-row mx-auto' style={{width:'200px'}}>
          <div className='col-md-4 mb-3'>
          <label style={{color:'whitesmoke', backgroundColor:'rgba(0,0,0,0.5'}}>Message </label>
            <textarea 
            name="message"
            type='text'
            placeholder='Type your message here'
            value={message}
            onChange={handleFormInput}
            onBlur={handleMessageBlur}
            style={{width: '400px'}}
            />
          </div>
        </div>
        <div className='form-row mx-auto' style={{width:'200px'}}>
          <div className='col-md-4 mb-3'>
            <button className='btn btn-primary' type='submit' onSubmit={handleFormSubmit} style={{backgroundColor: 'black', border:'black', borderRadius:'5px'}}> Submit </button>
          </div>
        </div>
      </form>

      {
        errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )
      }
    </div>
  );
}
