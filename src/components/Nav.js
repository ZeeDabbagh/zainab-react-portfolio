import React from 'react'

function Nav ({ currentPage, handlePageChange }) {
    return (
        <ul>
            <li>
                <a 
                href='#about' onClick={() => handlePageChange('About')}
                className={currentPage === 'About'? 'nav-link active' : 'nav-link'}
                >
                About
                </a>
            </li>
            <li>
                <a 
                href='#projects' onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects'? 'nav-link active' : 'nav-link'}
                >
                Projects
                </a>
            </li>
            <li>
                <a 
                href='#projects' onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact'? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
        </ul>
    )
}

export default Nav