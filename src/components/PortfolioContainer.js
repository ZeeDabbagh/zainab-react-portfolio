import React from "react";
import About from './pages/About'
import Contact from "./pages/Contact";
import Projects from './pages/ProjectList'
import Resume from "./pages/Resume";
import Header from './Header'
import Footer from './Footer'

export default function ProfileContainer({currentPage, handlePageChange}) {

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    }
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )

    }


