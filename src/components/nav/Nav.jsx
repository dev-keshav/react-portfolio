import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {MdHomeRepairService} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BiBookBookmark/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><MdHomeRepairService/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav