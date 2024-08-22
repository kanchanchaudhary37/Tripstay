import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
    <div className="main-container">
      <div className="row-100">
        <div className="footer-content">
          <h2>TripStay</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <p>Copyright © 2019 | All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
