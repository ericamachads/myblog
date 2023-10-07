import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <div className='container'>
        <section className="contact-info">
        <h3>Contacts</h3>
        <p>I'd be happy to get in touch with you. You can reach me in the following ways:</p>
        <ul>
          <li>Email: <a href="mailto:erica-vitoria-855@hotmail.com">erica-vitoria-855@hotmail.com</a></li><br></br>
          <li>Phone (Portugal): <a href="tel:+351929392019">+351 929392019</a></li><br></br>
          <li>Linkedin: <a href="https://www.linkedin.com/in/erica-da-silva/" target='_blank' rel='noopener noreferrer'>linkedin.com/in/erica-da-silva/ </a></li><br></br>
          <li>Github: <a href="https://github.com/ericamachads" target='_blank' rel='noopener noreferrer'>github.com/ericamachads </a></li><br></br>
        </ul>
      </section>
      </div>
    )
  }
}

export default Contact
