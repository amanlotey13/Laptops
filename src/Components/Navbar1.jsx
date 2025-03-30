import React from "react";
import { Link } from "react-router-dom";

function Navbar1() {
  return (
    <div>
      <nav className="navbar1 navbar-expand-lg bg-dark mb-2">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-5 mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" to={"/home"}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-light" to={"/product"}>
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-light" to={"/about"}>
                  About
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link active text-light" to={"/shop"}>
                  Shop
                </Link>
              </li> */}
           
              {/* <li className="nav-item">
                <Link className="nav-link active text-light" to={"/cart"}>
                  Cart
                </Link>
              </li> */}
              
              <li className="nav-item">
                <Link className="nav-link active text-light" to={"/login"}>
                  Login 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
