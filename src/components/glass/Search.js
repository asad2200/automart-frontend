import React, { useState } from 'react'

function Search({ loadSearchGlass }) {
    const [carname, setCarname] = useState('')
    return (
        <div className="row m-3">
            <div className="d-inline-flex">
                <input type="text" className="form-control" placeholder="Enter Car Name" value={carname} onChange={(e) => {
                    setCarname(e.target.value);
                }}></input>
                <button className="btn btn-primary btnc" onClick={() => loadSearchGlass(carname)}>Search </button>
            </div>
        </div >
    )
}

export default Search
