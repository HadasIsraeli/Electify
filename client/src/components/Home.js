import React from 'react';
// import BallotBox from '../assets/BallotBox.png';
import voting from '../assets/voting.png';

const Home = (props) => {
    // setTimeout(()=>{
    //     props.history.push("/About")
    // },4000)
    return (
        <div className="container home">
            {/* <h4 className="center">Home</h4> */}
            <h1 className="center">Wellcome!</h1>
            <h3 className="center">Today is ellection day!</h3>
            {/* <img src={BallotBox} alt="BallotBox" /> */}
            <img src={voting} alt="voting" />
            <h6>Hadas Israeli, Inbar Israeli, Ohad Edry</h6>
        </div>
    )
}
export default Home;