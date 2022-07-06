import React, { forwardRef } from 'react';
import '../styles/Project.scss';

const Project = forwardRef((_,ref) => {
  return (
    <div className="cuerpo" ref={ref}>Project</div>
  )
})

export default Project;
