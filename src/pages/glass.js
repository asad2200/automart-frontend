import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Filter from '../components/glass/Filter'
import Search from '../components/glass/Search'
import Items from '../components/glass/Items'
import { getCompanyNames, getGlass, getSearchGlass } from '../apicall'
import '../assets/css/glass.css'


function Glass() {
    const [cmpnames, setCmpnames] = useState([])
    const [items, setItems] = useState([])

    const loadAllCompanys = () => {
        getCompanyNames()
            .then((data) => {
                setCmpnames(data);
            });
    }
    useEffect(() => {
        loadAllCompanys();
    }, [])

    const loadGlass = (cid, mid) => {
        getGlass(cid, mid)
            .then((data) => {
                setItems(data.results);
            });
    }

    const loadSearchGlass = (carname) => {

        getSearchGlass(carname)
            .then((data) => {
                setItems(data.results);
            });
    }

    return (
        <div className='glass'>

            <NavBar navitems={['glass',]} bg={true} />
            <Filter cmpnames={cmpnames} loadGlass={loadGlass} />
            <Search loadSearchGlass={loadSearchGlass} />
            <Items items={items} />
        </div>
    )
}

export default Glass
