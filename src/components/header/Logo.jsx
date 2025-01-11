import React from 'react'

// 아이콘 링크
import { GiSpellBook } from "react-icons/gi";

const Logo = () => {
  return (
    <h1 className='header__logo'>
      <a href='/'>
        <GiSpellBook />
        <span>RunBBit 독서 노트</span>
      </a>
    </h1>
  )
}

export default Logo