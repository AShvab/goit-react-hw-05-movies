import React from 'react'
import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (

  <div className={css.header}>
    <ul className={css.headerList}>
      <li className={css.headerItem}>
        <NavLink className={css.headerLink}  to='/'>Home</NavLink>
      </li>
      <li className={css.headerItem}>
        <NavLink className={css.headerLink} to='/movies'>Movies</NavLink>
      </li>
    </ul>
</div>
  )
}

export default Navigation
