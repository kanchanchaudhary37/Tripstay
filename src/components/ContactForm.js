import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // added state for submitted form

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Submitting ${name}, ${email}, ${message}`);
    // Perform form submission logic here
    setSubmitted(true); // update state to show thank you message
  }

  // render thank you message if form is submitted
  if (submitted) {
    return ( 
      <>
        <section id="contact-herobanner">
        <div className="contact-herobanner"></div>
        <div className="main-container">
          <div className="row-100">
            <div className="contact-herobanner-content " data-aos="fade-up">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
        </section>
      
       <div className="thank-message">
         <h3>Thank you for submitting the form!</h3>
       </div>
      </>
    );
  }

  // render form if form is not submitted
  return (
    <>
      <section id="contact-herobanner">
      <div className="contact-herobanner"></div>
      <div className="main-container">
        <div className="row-100">
          <div className="contact-herobanner-content " data-aos="fade-up">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      </section>

      <div className="contact-form">
        <div className="main-container">
          <div className="form-caption">
            <div className="form-heading">
              <h2>Send us message</h2>
            </div>
            <div className="form-desc">
              <p>Please send us a message using the form below, and we'll get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              value={message}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
