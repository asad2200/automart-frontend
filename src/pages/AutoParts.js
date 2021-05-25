import React from 'react'
import '../assets/css/autoparts.css'
import Card from '../components/autoParts/Card'
import NavBar from '../components/NavBar'

function AutoParts() {
    return (
        <>
            <NavBar navitems={['AutoParts & Auto Accessories',]} bg={true} />
            <div className="container mt-3">
                <h2>Auto Parts & Auto Accessories</h2>
                <hr />
                <div className="row mb-3">
                    <div className="d-inline-flex">
                        <input type="text" className="form-control" placeholder="Enter Item Name"></input>
                        <button className="btn btn-primary btnc">Search </button>
                    </div>
                </div >
            </div>
            <div className="row m-2 view">
                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2">
                    <Card item={[]} />
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2">
                    <Card item={[]} />
                </div>
            </div>
        </>
    )
}

export default AutoParts