import React from 'react'

function Card({ item }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Name: {item.name}</h5>
                <p className="card-text m-0">Car: {item.car}</p>
                <p className="text-muted">Description: {item.description}</p>
                <button className="btn btn-outline-primary">Price: {item.price}</button>
            </div>
        </div >
    )
}

export default Card
