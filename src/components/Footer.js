import '../css/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-header">
        <p>
          Lucas Mullen
        </p>
        <p>
          All rights reserved
        </p>
      </div>
      <div className="footer-footer">
        <p>
          Go to
          <a href="https://github.com/mullenlucas/currency-converter">
            {' '}
            GitHub repository
            {' '}
          </a>
          for more information and acknowledgements
        </p>
      </div>

    </footer>
  );
}

export default Footer;
