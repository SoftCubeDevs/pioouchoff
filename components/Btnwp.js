import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Btnwp = () => {
  return (
    <>
      <div className='btn-wp btn-fixed'><a href='https://api.whatsapp.com/send?phone=5215551004343&text=Hola%20Sin%20Piojos!!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20Pueden%20atenderme%20por%20favor?'><FaWhatsapp /></a></div>
      <div className='btn-pn btn-fixed'><a href='tel:5551004343'><FaPhone /></a></div>
    </>
    
  )
}

export default Btnwp;