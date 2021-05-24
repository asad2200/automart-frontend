import React from 'react'
import '../../assets/css/glass.css'
function Filter() {
    return (
        <div className="row glass m-3">
            <div className="col-sm-6 col-md-3 mb-1">
                <select className="form-select" aria-label="Default select example">
                    <option value="0">-- Select a Company --</option>
                </select>
            </div>
            <div className="col-sm-6 col-md-3 mb-1">
                <select className="form-select" aria-label="Default select example">
                    <option value="0">-- Select a Car --</option>
                </select>
            </div>
            <div className="col-sm-6 col-md-3 mb-1">
                <select className="form-select" aria-label="Default select example">
                    <option value="0">-- Select a Model Of Car --</option>
                </select>
            </div>
            <div className="col-sm-6 col-md-3 d-grid mb-1">
                <div className="btn btn-primary btnc">Go </div>
            </div>
        </div>
    )
}

export default Filter
