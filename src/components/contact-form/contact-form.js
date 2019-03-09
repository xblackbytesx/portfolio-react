import React from 'react';
import './contact-form.css';

const ContactForm = (props) => (
  <section className="contact-form">
    <h1 className="visuallyhidden">Contact Form</h1>
    <form action={`https://formspree.io/${props.email}`} method="POST" enctype="text/plain">
      <fieldset>
        <div>
          <label for="contact-name">Name:</label>
          <input type="text" name="name" id="contact-name" autocomplete="off" />
        </div>
        <div>
          <label for="contact-email">Email Address:</label>
          <input type="email" name="_replyto" id="contact-email" autocomplete="off" />
        </div>
        <div>
          <label for="contact-subject">Subject:</label>
          <input type="text" name="subject" id="contact-subject" autocomplete="off" />
        </div>
        <div>
          <label for="contact-message">Message:</label>
          <textarea name="body" id="contact-message"></textarea>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </fieldset>
    </form>
  </section>
)

export default ContactForm;
