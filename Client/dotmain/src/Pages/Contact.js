import React, {forwardRef} from 'react';
import '../styles/Contact.scss';

const Contact = forwardRef((_,ref) => {
  return (
    <div className="gris" ref={ref}>Contact</div>
  )
})

export default Contact;