import React from 'react'

// 컨포넌트 로드
import Logo from '../header/Logo';
import Menu from '../header/Menu';

const Header = () => {
  return (
    <header id='header' role='banner'>
      <Logo />
      <Menu />
    </header>
  )
}

export default Header