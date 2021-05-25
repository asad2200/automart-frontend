import React from 'react'

function Search({ loadSearchGlass }) {
    return (
        <div className="row m-3">
            <div className="d-inline-flex">
                <input type="text" className="form-control" placeholder="Enter Car Name" onChange={(e) => {
                    loadSearchGlass(e.target.value)
                }}></input>
            </div>
        </div >
    )
}

export default Search
