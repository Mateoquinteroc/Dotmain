import React , {forwardRef}from 'react';
import '../styles/About.scss';

const About = forwardRef ((_,ref) => {
  return (
    <div className="naranja" ref={ref}>About</div>
  )
})

export default About;