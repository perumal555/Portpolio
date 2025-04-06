import React from 'react'
import pdf from '../assets/Resume.pdf'
// import pic from '../assets/pic.jpg'
import img1 from '../assets/img.jpg'

function Cantant() {
  return (
    <>

    <div className='text'>
      <div className='txt'>
        <h4 id='h3'>Hey, It's Me</h4>
        <h2 id='h2'>Narasinga Perumal.K</h2>
        <div className='role-container'>
          <h4 className='pe-2'>And I'm a </h4>
          <h4 className='text1'>
            <span className='name'> Full Stack Developer </span>
          </h4>
        </div>
        <p id='p'>
          A Full Stack Developer is responsible for designing and implementing 
          the visual and functional aspects of websites and web applications, 
          ensuring a seamless, responsive, and engaging user experience.
        </p>
        <div className="button-container">
          <a href={pdf} download="CV_Narasinga_Perumal.pdf">
            <button className='btn'>Download My CV</button>
          </a>
          <a href='https://github.com/perumal555' target="_blank" rel="noopener noreferrer">
            <button className='btn'>My GitHub Link</button>
          </a>
        </div>
      </div>

      <div className='txt1'>
        <img src={img1} alt="Profile" />
      </div>
    </div>  
    </>
  )
}

export default Cantant
