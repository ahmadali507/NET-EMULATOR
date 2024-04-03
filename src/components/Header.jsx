import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <p className="subject">Mathematics</p>
        <p className="test-type">
          Engineering/Computer Science/BS Mathematics (With Chemistry)
        </p>
        <p className="net-demo">
          <span className="studentID">STUDENTID</span>
          <span className="studentName">(NAME)</span>
        </p>
      </header>
    </div>
  );
};

export default Header;
