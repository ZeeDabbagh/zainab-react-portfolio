import React, { useState } from "react";
import About from './pages/About'
import Contact from "./pages/Contact";
import Projects from './pages/ProjectList'
import Header from './Header'
import Footer from './Footer'

export default function ProfileContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Header />
            {renderPage()}
            <Footer />
        </div>
    )
}