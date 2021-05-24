import React from 'react'
import NavBar from '../components/NavBar'
import Filter from '../components/glass/Filter'
import Search from '../components/glass/Search'
function glass() {
    return (
        <>
            <NavBar navitems={['glass',]} bg={true} />
            <Filter />
            <Search />
            <div class="row container">
                <div class="col-sm-6 col-md-">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Name</h4>
                            <p class="card-text mb-0">Car: <br /> Model: </p>
                            {/* <p class="text-muted">description: </p>
                            <h5 class="card-title">Price</h5> */}
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 mb-1">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Name</h4>
                            <p class="card-text mb-0">Car: <br /> Model: </p>
                            <p class="text-muted">description: </p>
                            <h5 class="card-title">Price</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default glass
