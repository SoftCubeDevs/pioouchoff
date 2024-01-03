import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Btnwp = () => {
  return (
    <>
      <div className='btn-wp btn-fixed'><a href='https://wa.me/5215551004343'><FaWhatsapp /></a></div>
      <div className='btn-pn btn-fixed'><a href='tel:5551004343'><FaPhone /></a></div>
    </>
    
  )
}

export default Btnwp;