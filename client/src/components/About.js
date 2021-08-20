import React from 'react'

const About = () => {
    return (
        <div className="container">
            <h1 className="center">Ballot Box</h1>
            <p><h4>Chose your Party here:</h4></p>
            <input type="text" id="txtName" />
            <button type="submit">Submit</button>
        </div>
    )
}

export default About;