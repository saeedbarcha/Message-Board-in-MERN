import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="main">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/">
            <b>Message Board</b>
          </Link >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link to="/">Home</Link> */}
                <Link to='/'>Home</Link>
                
              </li>

              <li className="nav-item">
              <Link to="/arts">Arts</Link>
                
              </li>

              <li className="nav-item">
              <Link to="/cars">Cars</Link>
                
              </li>
              
              <li className="nav-item">
              <Link to="/music">Music</Link>
                
              </li>

              <li className="nav-item">
              <Link to="/programming">Programming</Link>
                
              </li>

              <li className="nav-item">
              <Link to="/sports">Sports</Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  
  );
};

export default Home;
