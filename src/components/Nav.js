import PropTypes from 'prop-types';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../media/currency-dice.png';
import '../css/nav.css';

function Nav({ title }) {
  const location = useLocation();

  return (
    <header>
      <Link className="header-logo" to="/">
        <img src={logo} alt="logo currency converter" className="logo-img" />
        <h1>{title}</h1>
      </Link>
      <nav>
        <ul className="ul-links">
          <li>
            <NavLink to="/" id="home">
              {location.pathname === '/' ? 'Currencies' : 'Go Back'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Nav;
