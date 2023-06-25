import React from "react";
// import placeHolderImg from '../../assets/images'

const projects = [
    {
        id: 1,
        name: 'Manager-FC',
        description:'manager for neighborhood league soccer clubs with language switcher',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        id: 2,
        name: `It's your party and you'll get facts if you want to`,
        description:'Enter your DOB and get fun facts about the day in history',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        id: 3,
        name: `Project 3`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        id: 4,
        name: `Project 4`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        id: 5,
        name: `Project 5`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        id: 6,
        name: `Project 6`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        id: 7,
        name: `Project 7`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        id: 8,
        name: `Project 8`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
    {
        id: 9,
        name: `Project 9`,
        description:'description',
        // image: placeHolderImg,
        technologies: 'addsometech'
    },
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