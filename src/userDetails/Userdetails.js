import React, { memo } from 'react'
import UserList from './UserList';
import countryListAlpha2 from './CountryList'

const Userdetails = ({ getDetails, setGetDetails,keys }) => {
    const Revese = () => {
        setGetDetails([...getDetails.reverse()]);
    }

    return (
        <>
            <div className='row' key={keys}>
                <div className='col-md-4 ms-auto'>
                    <button className='btn btn-primary float-end d-inline-block' 
                    onClick={Revese}>Reverse order</button>
                </div>
            </div>

            {getDetails && getDetails.map((data, i) => {
                return (
                    <>
                        <UserList 
                            data={data} 
                            keys={i}
                            countryListAlpha2={countryListAlpha2}
                        />
                    </>
                )
            })}
        </>
    )
}

export default memo(Userdetails)