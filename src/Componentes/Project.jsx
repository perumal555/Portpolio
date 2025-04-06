import React from 'react'
import vegetable from '../assets/vegetable.jpg'
import login from '../assets/login.jpg'
import game from '../assets/game.jpg'
import dj from '../assets/dj.jpg'
import fruit from '../assets/fruit.jpg'


function Project() {
  const projects = [
    { img: vegetable, text: "HTML & CSS" },
    { img: login, text: "HTML, CSS & REACT JS" },
    { img: game, text: "PYTHON , GAME" },
    { img: dj, text: "HTML, CSS & BOOTSTRAP" },
    { img: fruit, text: "HTML, CSS, BOOTSTRAP, REACT JS & NODE JS" },
  ];

  return (
    <>
      <div>
        <h2 data-aos="zoom-in" className="text-light text-center mt-5">
          My <span>Project</span>
        </h2>
      </div>

      <div className="card-container-bar1">
        {projects.map((item, index) => (
          <div className="card-bar1 mx-3" key={index}>
            <div className="image-container" data-aos="zoom-in">
              <img className="imgs" src={item.img} alt="Project" />
            </div>
            <div className="text-bar1">{item.text}</div>
          </div>
        ))}
      </div>

        
    </>
  )
}

export default Project
