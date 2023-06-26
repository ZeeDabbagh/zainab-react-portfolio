import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Flower from '../../assets/images/flowers-2.jpeg'

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormInput = (e) => {
    const { target } = e;
    const { inputType } = target.name;
    const { inputValue } = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === name) {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
        setErrorMessage('Your email is invalid')
    } else {
        setErrorMessage('');
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

    // alert(`Thank you for contacting me, ${name}, I'll be in touch soon`);

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
            type='text'
            placeholder='Email'
            value={email}
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
    </div>
  );
}

    // <div className='container'>
    //   <div className='row-header'>
    //   <h2>Say hello!</h2>
    //   </div>
    //   <div className='row body'>
    //     <form action='#'>
    //       <ul>
    //         <li>
    //           <p className='left'>
    //             <label for='Name'>Name</label>
    //             <input 
    //             type='text'
    //             value={name}
    //             onChange={handleFormInput}
    //             />
    //           </p>
    //         </li>
    //         <li>
    //           <p className='left'>
    //             <label for='Email'>Email</label>
    //             <input 
    //             type='emai'
    //             value={email}
    //             onChange={handleFormInput}
    //             />
    //           </p>
    //         </li>
    //         <li>
    //           <p className='left'>
    //             <label for='Message'>Your Message</label>
    //             <input 
    //             type='text'
    //             value={message}
    //             onChange={handleFormInput}
    //             />
    //           </p>
    //         </li>
    //         <li>
    //           <button 
    //           className='btn btn-submit'
    //           onSubmit={handleFormSubmit}>Submit!</button>
    //         </li>
    //       </ul>
    //     </form>
    //   </div>


    // </div>
    // <div>
    //   <h5>Say hello!</h5>
    //   <form class='form' id='contact-me'>
    //     <p>
    //       <label for='username'>Your Name:</label>
    //       <input
    //         value={name}
    //         type='name'
    //         onChange={handleFormInput}
    //         placeholder='Your first and last name'
    //       />
    //     </p>
    //     <p>
    //       <label for='email'>Your Email</label>
    //       <input
    //       value={email}
    //       type='email'
    //       onChange={handleFormInput}
    //       placeholder='me@example.com'
    //       />
    //     </p>
    //     <p>
    //       <label for='comment'>Your message</label>
    //       <textarea
    //         value={message}
    //         name='message'
    //         onChange={handleFormInput}
    //         placeholder='Write your message here'
    //       ></textarea>
    //     </p>
    //     <p>
    //       <button type='button' onClick={handleFormSubmit}>SUBMIT</button>
    //     </p>
    //   </form>
    //   {errorMessage && (
    //     <div>
    //       <p className="error-text">{errorMessage}</p>
    //     </div>
    //   )}
    // </div>