import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>CONTACT US:</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Armenia, Yerevan</li>
              <li>0056 Street Lvovyan </li>
            </h1>
          </div>
          </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SITE-LAYOUT | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;