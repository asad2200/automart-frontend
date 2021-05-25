import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../../assets/hero.jpg"
function Category() {
    return (
        <div className="container mt-4 mb-5" id="category">
            <h1>Category</h1>
            <hr />
            <div className="row ">
                <div className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 mb-2">
                    <div className="card cardm" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={hero} alt="card thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title"><span className="hero-green">Auto</span> Parts</h5>
                            <p className="card-text">All kind of Auto Parts and Accessories.</p>
                            <Link to="auto-parts" className="btn btn-outline-light">Check Here</Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 mb-2">
                    <div className="card cardm" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={hero} alt="card thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title"><span className="hero-green">Auto</span> Glass</h5>
                            <p className="card-text">All Kind Of Glass and Replacment.</p>
                            <Link to="glass" className="btn btn-outline-light">Check Here</Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 mb-2">
                    <div className="card cardm" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={hero} alt="card thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title"><span className="hero-green">Auto</span> Colour</h5>
                            <p className="card-text">All Kind of auto colour and computer color.</p>
                            <Link to="colour" className="btn btn-outline-light">Check Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
