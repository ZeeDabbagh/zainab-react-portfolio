import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage(
        `The email you used is invalid, please use a valid email for ${name}`
      );
      return;
    }

    alert(`Thank you for contacting me, ${name}, I'll be in touch soon`);

    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div>
      <h5>Say hello!</h5>
      <form class='form' id='contact-me'>
        <p>
          <label for='username'>Your Name:</label>
          <input
            value={name}
            type='name'
            onChange={handleFormInput}
            placeholder='Your first and last name'
          />
        </p>
        <p>
          <label for='email'>Your Email</label>
          <input
          value={email}
          type='email'
          onChange={handleFormInput}
          placeholder='me@example.com'
          />
        </p>
        <p>
          <label for='comment'>Your message</label>
          <textarea
            value={message}
            name='message'
            onChange={handleFormInput}
            placeholder='Write your message here'
          ></textarea>
        </p>
        <p>
          <button type='button' onClick={handleFormSubmit}>SUBMIT</button>
        </p>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
