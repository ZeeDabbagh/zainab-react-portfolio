import React from "react";
import Nav from "./Nav";

// import on insert styles

function Header({currentPage, handlePageChange}) {
  return (
    <div>
      <header>
        <h1 className="title">Zainab's Portfolio</h1>
        {/* insert image here? */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    </div>
  );
}

export default Header;
