import React from 'react'

const UserList = ({data,keys,countryListAlpha2}) => {
    return (
        <>
            <div className='col-md-4 col-12 d-flex mt-4' key={keys}>
                <div className='card bg-white shadow h-100 w-100 p-4'>
                    <h5 className='text-primary'>Country Code: {countryListAlpha2[data.country_id] }</h5>
                    <p className='text-danger'>
                        Probability: {data.probability}
                    </p>
                </div>
            </div>
        </>
    )
}

export default UserList