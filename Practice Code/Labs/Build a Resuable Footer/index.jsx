export const Footer = () => {
  return (
    <footer>
      <div className="main-links">
        <ul className="web-links links">
          <li className="link-item">
            <a href="#">About</a>
          </li>
          <li className="link-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="social-links links">
          <li className="link-item">
            <a href="#">Instagram</a>
          </li>
          <li className="link-item">
            <a href="#">Facebook</a>
          </li>
        </ul>
        <ul className="business-links links">
          <li className="link-item">
            <a href="#">LinkedIn</a>
          </li>
          <li className="link-item">
            <a href="#">Github</a>
          </li>
        </ul>
      </div>

      <p>All rights reserved. &copy; freeCodeCamp.com </p>
    </footer>
  );
};
