import React, { useState } from "react";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ zIndex: 1, backgroundColor: "rgb(40, 82, 211)" }}>
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <h2>𝓝𝓸𝓿𝓪𝓝𝓸𝓽𝓮𝓫𝓸𝓸𝓴𝓼 amanlotey</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <form className="d-flex" onSubmit={handleSubmit}>
              <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <button type="submit" className="btn btn-primary">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
