import React from "react";
import "./Header.css";

const Header = () => {
  
  const handleClick = () => {
    window.scroll({
      top: 751, 
      behavior: 'smooth' 
    });
  };

  return (
    <div>
      <section className="hero">
        <div className="container header-container">
          <div className="text-content">
            <h1>Turn your fences into timeless piece of art</h1>
            <p>Discover Unmatched Quality and Service for Your Wood Preserving Needs at Lonestar Stain and Seal</p>
            <button onClick={handleClick} className="button">Learn More</button>
          </div>
          <div className="image-content">
            {/* <img src="" alt="Starrs Exterior Services"/> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
