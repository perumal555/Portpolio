import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'
import contact from '../assets/contact.webp'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.jpg'
import github from '../assets/github.png'
import email from '../assets/email.png'

function Contact() {
  return (
    <>
      <h2 data-aos="zoom-in" className='text-light text-center mt-5'>Contact <span>US</span></h2>

      <Container className='contact'>
      <Row className='align-items-center'>
        <Col lg={6} md={6} sm={12} xs={12} className='text-center'>
          <div className='contact-bar'>
            <img className='img-bar' src={contact} alt='Contact' />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <form>
            <div className='form'>
              <input type='text' name='name' placeholder='Your Name' required />
              <input type='email' name='email' placeholder='E-Mail' required />
              <textarea name='message' placeholder='Your Message...' required></textarea>
              <button className='btn-1' type='submit'>Submit</button>
            </div>
          </form>
        </Col>
      </Row>

      <Row className='justify-content-center mt-4'>
        <Col xs={12} className='text-center'>
          <div className='app-bar1'>
            <a href='https://web.whatsapp.com/' className='app-bar'><img src={whatsapp} alt='WhatsApp' /></a>
            <a href='https://www.linkedin.com/in/narasinga-perumal-598146264/' className='app-bar'><img src={linkedin} alt='LinkedIn' /></a>
            <a href='https://github.com/perumal555' className='app-bar'><img src={github} alt='GitHub' /></a>
            <a href='https://mail.google.com/mail/u/0/#inbox' className='app-bar'><img src={email} alt='Email' /></a>
          </div>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default Contact