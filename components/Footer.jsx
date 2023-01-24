import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

// komponent renderujący dolną część strony
const Footer = () => {
  return (
    <div className="footer-container">
    <p>All rights reserved </p>
    <p className="icons">
      <AiFillInstagram />
      <AiOutlineTwitter />
    </p>
    </div>
  )
}

export default Footer
