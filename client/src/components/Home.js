import React from 'react';
import voting from '../assets/voting.png';

const Home = (props) => {
    
    return (
        <div className="container home">
            <h2 className="center">Wellcome to Ellectify!</h2>
            <h3 className="center">A Smart Ellections BallotBox Webapp using Blockchain</h3>
            <img src={voting} alt="voting" />
            <h4>Represented by:</h4>
            <h4>Hadas Israeli, Inbar Israeli, Ohad Edry</h4>
        </div>
    )
}
export default Home;