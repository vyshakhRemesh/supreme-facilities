import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>
          &copy; {new Date().getFullYear()} Supreme Facilities Management. All
          rights reserved.
        </p>
        <p>
          📍 Abu Dhabi, UAE &nbsp; | &nbsp; 📞{" "}
          <a href="tel:+97100000000">+971-00-000-0000</a> &nbsp; | &nbsp; ✉️{" "}
          <a href="mailto:info@supremefacilities.ae">
            info@supremefacilities.ae
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
