import React from 'react';
import voting from '../assets/voting.png';

const Home = (props) => {

    return (
        <div className="container home">
            <h2 className="center">Wellcome to Electify!</h2>
            <h3 className="center">Smart contracts and secured blockchain encryption e-voting</h3>
            <img src={voting} alt="voting" className='img'/>
            <h4>Represented by:</h4>
            <h4>Hadas Israeli, Inbar Israeli, Ohad Edry</h4>
        </div>
    )
}
export default Home;