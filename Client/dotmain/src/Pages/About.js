import React , {forwardRef}from 'react';
import '../styles/About.scss';

const About = forwardRef ((_,ref) => {
  return (
   <div className="about-container" ref={ref}>
    <div className="about_item-container">
      <h1 className="about_title">Dotmain</h1>
      <p className="about_paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <img className="about-img" src="https://www3.gobiernodecanarias.org/medusa/mediateca/ecoescuela/wp-content/uploads/sites/2/2013/11/02-Camara-de-video.png" />
    </div>
   </div>
  )
})

export default About;