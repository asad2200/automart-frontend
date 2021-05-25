import React, { useState } from 'react'
import { getCarNames, getCarModels } from '../../apicall'

function Filter({ cmpnames, loadGlass }) {
    const [carnames, setCarnames] = useState([])
    const [carmodels, setCarmodels] = useState([])

    const loadCars = (id) => {
        getCarNames(id)
            .then((data) => setCarnames(data));
    }
    const loadModels = (id) => {
        getCarModels(id)
            .then(data => setCarmodels(data))
    }
    const cmpChange = (e) => {
        var tmp = e.target.value
        if (tmp !== "0")
            loadCars(tmp)
    }
    const carChange = (e) => {
        var tmp = e.target.value
        if (tmp !== "0")
            loadModels(tmp)
    }
    const loadItems = () => {
        var cid = document.getElementById("cars").value
        var mid = document.getElementById("models").value
        if (cid !== "0" && mid !== 0)
            loadGlass(cid, mid)
        else
            alert("Select proper CAR and Models")
    }
    return (
        <div className="row m-3">
            <div className="col-sm-6 col-md-3 mb-1">
                <select className="form-select" onChange={cmpChange}>
                    <option key={0} value="0">-- Select a Company --</option>
                    {cmpnames.map(({ id, name }) => {
                        return <option key={id} value={id}>{name}</option>;
                    })}
                </select>
            </div>
            <div className="col-sm-6 col-md-3 mb-1">
                <select className="form-select" onChange={carChange} id="cars">
                    <option key={0} value="0">-- Select a Car --</option>
                    {carnames.map((carname) => {
                        return <option key={carname.id} value={carname.id}>{carname.name}</option>;
                    })}
                </select>
            </div>
            <div className="col-sm-6 col-md-3 mb-1">
                <select className="form-select" id="models">
                    <option key={0} value="0">-- Select a Model Of Car --</option>
                    {carmodels.map((carmodels) => {
                        return <option key={carmodels.id} value={carmodels.id}>{carmodels.name}</option>;
                    })}
                </select>
            </div>
            <div className="col-sm-6 col-md-3 d-grid mb-1">
                <div className="btn btn-primary btnc" onClick={() => loadItems()}>Go </div>
            </div>
        </div >
    )
}

export default Filter
