import React, { useState } from 'react'
import '../assets/css/autoparts.css'
import Card from '../components/autoParts/Card'
import NavBar from '../components/NavBar'
import { getItemsByCar, getItemsByName } from '../apicall'

function AutoParts() {
    const [items, setItems] = useState([])

    const loadItemsByCar = (carname) => {
        getItemsByCar(carname)
            .then((data) => {
                setItems(data);
            });
    }
    const loadItemsByName = (itemname) => {
        getItemsByName(itemname)
            .then((data) => {
                setItems(data);
            });
    }

    const searchItems = (e) => {
        var baseSearch = document.getElementById("search").value
        var name = e.target.value
        if (name === '')
            setItems([])
        else if (baseSearch === "1")
            loadItemsByName(name)
        else if (baseSearch === "2")
            loadItemsByCar(name)
    }

    return (
        <>
            <NavBar navitems={['AutoParts & Auto Accessories',]} bg={true} />
            <div className="container mt-3">
                <h2>Auto Parts & Auto Accessories</h2>
                <hr />
                <div className="row m-1">
                    <div className="col-10 d-grid p-0">
                        <input type="text" onChange={searchItems} className="form-control" placeholder="Enter Item Name" />
                    </div>
                    <div className="col-2 d-grid p-0">
                        <select className="form-select col-4" id="search">
                            <option value="1">Search By Name</option>
                            <option value="2">Search By Car</option>
                        </select>
                    </div>
                </div >
            </div>
            <div className="row m-2 view">
                {items.map((item) => {
                    return <div key={item.id} className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2">
                        <Card item={item} />
                    </div>
                })}
            </div>
        </>
    )
}

export default AutoParts