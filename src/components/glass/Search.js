import React from 'react'

function Search() {
    return (
        <div className="row glass m-3">
            <div className="d-inline-flex">
                <input type="text" className="form-control" placeholder="Enter Car Name" ></input>
                <div className="btn btn-primary btnc">Search </div>
            </div>
        </div>
    )
}

export default Search
