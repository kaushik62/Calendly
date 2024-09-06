import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_r0egbwn', 'template_sm8tshk', templateParams, 'zYgROe2zFpsQxFKYc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('SUCCESS');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('FAILED');
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label>Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        
        <button type="submit">Send</button>
      </form>
      
      {status === 'SUCCESS' && <p className="success-message">Message sent successfully!</p>}
      {status === 'FAILED' && <p className="error-message">Failed to send message. Please try again.</p>}
    </div>
  );
};

export default Contact;
