import React from 'react'
import Card from './Card'

function Items({ items }) {
    return (
        <div className="row m-2">
            {items.map((item) => {
                return <div key={item.id} className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2">
                    <Card item={item} />
                </div>
            })
            }
        </div>
    )
}

export default Items
