import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/home/Hero';
import Category from '../components/home/Category';
import '../assets/css/home.css';
function Home() {
    return (
        <>
            <NavBar navitems={['home', 'category', 'contact']} bg={false} />
            <Hero />
            <Category />
        </>
    )
}

export default Home
