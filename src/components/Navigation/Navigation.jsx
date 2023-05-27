import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
   &.active {
    color: orange;
  }
`;

const Navigation = () => {
  return (

  <>
    <ul className={css.headerList}>
      <li className={css.headerItem}>
        <StyledLink className={css.headerLink}  to='/'>Home</StyledLink>
      </li>
      <li className={css.headerItem}>
        <StyledLink className={css.headerLink} to='/movies'>Movies</StyledLink>
      </li>
    </ul>
</>
  )
}

export default Navigation
