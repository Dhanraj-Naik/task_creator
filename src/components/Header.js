import React from 'react'
import MyImg from '../assets/smms.png'
import  './header.css'
export const Header = () => {
  return (
    <div>
        <h1>Hello</h1>
         <img className='logo' src={MyImg} alt="Shigmotsav schedule" />
    </div>
  )
}
