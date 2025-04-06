import React from 'react'
import marketing from '../assets/fullstack.webp'
import response from '../assets/frontend.gif'
import webdeveloper from '../assets/webdeveloper.gif'


function Blogs() {
  const services = [
    {imgs : marketing, text1 : "MARKETING"},
    {imgs : response, text1:"RESPONSIVE DESIGN"},
    {imgs:webdeveloper, text1:"WEB DESIGN & DEVELOPMENT"}
  ]
  return (
    <>
      <h2 data-aos="zoom-in" className='text-light text-center mt-5'>My<span> Services</span></h2>

      <div className="service-bar">
        {services.map((item, index) => (
          <div className="service-bar1 mx-3" key={index}>
            <div className="image-container" data-aos="zoom-in">
              <img className="imgs" src={item.imgs} alt="Project" />
            </div>
            <div className="text-bar1">{item.text1}</div>
          </div>
        ))}
      </div>

    </>
  )
}

export default Blogs