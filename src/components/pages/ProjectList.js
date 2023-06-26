import React from "react";


const projects = [
    {
        name: 'Manager-FC',
        description:'manager for neighborhood league soccer clubs with language switcher',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        name: `It's your party and you'll get facts if you want to`,
        description:'Enter your DOB and get fun facts about the day in history',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        name: `Project 3`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        name: `Project 4`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        name: `Project 5`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        name: `Project 6`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    }
]

export default function PortfolioItems() {
    return (
        <div className="container">
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h2>{project.name}</h2>
                        {/* <img src={project.img} alt={project.name}/> */}
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}