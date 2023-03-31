import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import './style.scss'
import { BsSearch } from "react-icons/bs";
import Userdetails from './userDetails/Userdetails';

function App() {
    const [inputUser, setInputUser] = useState('');
    const [getDetails, setGetDetails] = useState([]);
    const [loading, setLoading] = useState(false)


    const userDetailsfun = async (e) => {
        e.preventDefault();
        setLoading(true)
        await axios.get(`https://api.nationalize.io/?name=${inputUser}`)
            .then((res) => {
                setGetDetails(res.data.country);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    

    console.log(`outer ${getDetails}`);

    return (
        <>
            <div className="container-fluid bg-warning py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <form className="form">
                                <div className="input-group">
                                    <input type="search"
                                        className="form-control"
                                        value={inputUser}
                                        placeholder='Please Enter Your Name ....'
                                        onChange={(e) => setInputUser(e.target.value)}
                                    />
                                    <button type="button"
                                        className="btn btn-primary"
                                        onClick={userDetailsfun}
                                    >
                                        <BsSearch />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='row'>
                        {getDetails ? <>
                            <Userdetails
                                getDetails={getDetails}
                                setGetDetails={setGetDetails}
                            />
                        </> : <>
                            ...loading
                        </>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
