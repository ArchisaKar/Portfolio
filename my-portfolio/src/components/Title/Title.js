import React from "react";
import "./Title.css";

export const Title = () => {
    return (
        <>
            <div className="titles">
            
                <p className="about-title"> ABOUT </p>

                <div className="title-boxes"> 
                
                    <div className="title1">
                        <p className="font-bold"> Frontend Developer </p>
                        <p> As a frontend developer, I specialize in creating engaging and responsive user interfaces that are both aesthetically pleasing and highly functional. </p>
                    </div>

                    <div className="title2">
                        <p className="font-bold"> AI/ML Engineer </p>
                        <p> I have a strong foundation in artificial intelligence and machine learning, enabling me to develop intelligent systems that can learn and adapt as required. </p>
                    </div>
                    
                </div>  

                {/* <div className="skills-section">
                    <p className="skills-text"> SKILLS </p>

                    <div className="skills-boxes">
                        {
                            skills.map((skill, id) => {
                                
                                return <div className="skill-box" key={id}>
                                    <div className="skill"> 
                                        <img src={skill.imageSrc} alt={skill.title} height="50px" width="50px"></img> 
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div> */}
                              
            </div>
        </>
    )
}
