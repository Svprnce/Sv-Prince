import '../styles/skills.css'
import htmlimg from '../assets/html.png'
// import { useEffect, useState } from 'react'
const Skills = () => {
   
    return (
        <div className="skills-div">
            <h3 className="text-center gradient-heading">Skills</h3>
            <p className='text-center grey-text'>The technology i used</p>
            <div className="skills">
                <ul className="skills-ul">
                    <li className='skills-li border'>
                        <div className="skill skill-front">
                            <div className="skill-img-div"><img src={htmlimg} alt="" srcset="" /></div>
                            <div className="skill-detail">
                                <h4 className='text-center gradient-heading'>Intermediate</h4>
                            </div>
                        </div>
                        <div className="skill skill-back">
                            {/* <div className="skill-img-div"><img src={htmlimg} alt="" srcset="" /></div> */}
                            <div className="skill-detail">
                                <h4 className='text-center gradient-heading'>Expert</h4>
                            </div>
                        </div>
                    </li>
                    <li className='skills-li border'>
                        <div className="skill skill-front">
                            <div className="skill-img-div"><img src={htmlimg} alt="" srcset="" /></div>
                            <div className="skill-detail">
                                <h4 className='text-center gradient-heading'>Intermediate</h4>
                            </div>
                        </div>
                        <div className="skill skill-back">
                            {/* <div className="skill-img-div"><img src={htmlimg} alt="" srcset="" /></div> */}
                            <div className="skill-detail">
                                <h4 className='text-center gradient-heading'>Expert</h4>
                            </div>
                        </div>
                    </li>
                    <li className='skills-li border'>
                        <div className="skill skill-front">
                            <div className="skill-img-div"><img src={htmlimg} alt="" srcset="" /></div>
                            <div className="skill-detail">
                                <h4 className='text-center gradient-heading'>Intermediate</h4>
                            </div>
                        </div>
                        <div className="skill skill-back">
                            {/* <div className="skill-img-div"><img src={htmlimg} alt="" srcset="" /></div> */}
                            <div className="skill-detail">
                                <h4 className='text-center gradient-heading'>Expert</h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills