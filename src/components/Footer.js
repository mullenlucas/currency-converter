import { Link } from 'react-router-dom';
import '../css/footer.css';

function Footer() {
  return (
    <footer>
      <p>
        Powered by
        <Link to="https://www.amdoren.com">Amdoren</Link>
      </p>
    </footer>
  );
}

export default Footer;
