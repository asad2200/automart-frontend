import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/home/Hero';
import Category from '../components/home/Category';
import Footer from '../components/home/Footer';
import '../assets/css/home.css';
function home() {
    return (
        <>
            <NavBar navitems={['home', 'category', 'contact']} bg={false} />
            <Hero />
            <Category />
            <Footer />
        </>
    )
}

export default home
