import { Link } from 'react-router-dom';
import React from 'react';

export default function ImproveSkills(){
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/RD.png" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">We are Recipe Diaries</h1>
                <p className="Description">with recipe Diaries you can:</p>
                <br></br>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <br></br>
                <Link to="/recipes" className="btn"> Explore Now
    </Link>
            </div>
        </div>
    )
}