import '../assets/css/NavBar.css';
import React from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom"

function NavBar({ navitems, bg }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id={bg ? "bg" : "nobg"}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><div className="logo-1">Auto</div><span className="logo-2"> Mart</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <BiMenuAltRight className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    navitems.map((navitem, key) =>
                                        <li key={key} className="nav-item">
                                            <a className="nav-link active " aria-current="page" href={`#${navitem}`}>{navitem.toUpperCase()}</a>
                                        </li>
                            )
                                }
                            </ul>
                    </div>
                </div>
                </div>
        </nav >
        </>
    )
}

export default NavBar
