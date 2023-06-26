import React from "react";
import Nav from "./Nav";
import '../styles/Header.css'
import background from '../assets/images/flowers-2.jpeg'

const styles = {
  headerStyles: {
    background: "black",
    color: "#fff",
    margin: ".5rem",
    backgroundImage: `url(${background})`,
    height: '25vh',
    backgroundSize: 'cover'
  },
  headingStyles: {
    fontSize: '2rem',
    textAlign: 'center',
    padding: '25px 25px 25px 5px',
    color: 'rgba(255, 255, 255, 0.9)'
  }
}


function Header({currentPage, handlePageChange}) {
  return (
    <div>
      <header style={styles.headerStyles} className="header">
        <h1 style={styles.headingStyles} className="title">Zainab Dabbagh</h1>
        {/* insert image here? */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    </div>
  );
}

export default Header;
