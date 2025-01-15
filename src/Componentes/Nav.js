import React from "react";
import "../css/style.css";
import "../css/normaliza.css";

function Nav() {
  return (
    <React.Fragment>
      <nav>
        <div className="nav-center">
          <ul className="nav-links">
            <li id="title-link">Star Wars React</li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
