import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import logo from '../media/currency-dice.png';
import '../css/nav.css';

function Nav({ title, routes }) {
  return (
    <header className="container">
      <Link className="header-logo" to="/">
        <img src={logo} alt="logo currency converter" className="logo-img" />
        <h1>{title}</h1>
      </Link>
      <nav>
        <ul className="ul-links">
          {routes.map(({ name, path }) => (
            <li key={path}>
              <NavLink className="nav-link" to={path} end>
                { name }
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Nav;
