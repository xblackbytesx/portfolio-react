import React from 'react';
import './contact-form.css';

const ContactForm = (props) => (
  <div>
    <section className="contact-form">
      <h1 className="visuallyhidden">Contact Form</h1>
      <fieldset>
        <form action={`mailto:${props.email}`} method="post" enctype="text/plain">
          <p><label for="contact-name">Name:</label><input type="text" id="contact-name" autocomplete="off" /></p>
          <p><label for="contact-email">Email Address:</label><input type="text" id="contact-email" autocomplete="off" /></p>
          <p><label for="contact-subject">Subject:</label><input type="text" id="contact-subject" autocomplete="off" /></p>
          <p><label for="contact-message">Message:</label><textarea id="contact-message"></textarea></p>
          <p><input type="submit" value="Submit" /></p>
        </form>
      </fieldset>
    </section>
  </div>
)

export default ContactForm;
