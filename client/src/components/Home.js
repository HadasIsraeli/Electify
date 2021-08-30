import React from 'react';
import voting from '../assets/voting.png';

const Home = (props) => {
    
    return (
        <div className="container home">
            <h2 className="center">Wellcome!</h2>
            <h3 className="center">Today is ellection day!</h3>
            <img src={voting} alt="voting" />
            <h6>Hadas Israeli, Inbar Israeli, Ohad Edry</h6>
        </div>
    )
}
export default Home;