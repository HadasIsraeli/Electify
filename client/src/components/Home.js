import React from 'react'
import BallotBox from '../BallotBox.png'

const Home = (props) => {
    // setTimeout(()=>{
    //     props.history.push("/About")
    // },4000)
    return (
        <div className="container home">
            <h4 className="center">Home</h4>
            <h1 className="center">Wellcome!</h1>
            <h3>Today is ellection day!</h3>
            <img src={BallotBox} alt="BallotBox" />
        </div>
    )
}
export default Home;