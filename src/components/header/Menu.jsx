import React from 'react'
import { headerMenus } from '../../data/header'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
  const location = useLocation(); // 현재 페이지 주소

  return (
    <div className='header__menu'>
      <ul className='menu'>
        {headerMenus.map((menu, key) => (
          <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
            <Link to={menu.src}>
              {menu.icon}{menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu