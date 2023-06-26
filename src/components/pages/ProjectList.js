import React from "react";

import ManagerFc from "../../assets/images/manager-fc.png";
import Party from "../../assets/images/party-logo.png";
import Quiz from "../../assets/images/quiz-logo.png";
import SocialNetwork from "../../assets/images/socialnetwork-logo.png";
import Password from "../../assets/images/password-logo.png";
import Ecommerce from "../../assets/images/ecommerce-logo.png";

const projects = [
  {
    name: "Manager-FC",
    description:
      "manager for neighborhood league soccer clubs with language switcher",
    image: ManagerFc,
    technologies: "Handlebars, sql/Sequalize, RESTFul API, JavaScript, Node JS",
    githubLink: 'https://github.com/ZeeDabbagh/manager-fc',
    deployedLink: 'https://manager-fc.herokuapp.com/'
  },
  {
    name: `It's Your Party`,
    description:
      "And you will get facts if you want to! Enter your DOB and get fun facts about the day in history",
    image: Party,
    technologies: "Third Party API, HTML, CSS, JavaScript, Confetti!",
    githubLink: 'https://github.com/ZeeDabbagh/its-your-party',
    deployedLink: 'https://zeedabbagh.github.io/its-your-party/'
  },
  {
    name: `JavaScript Trivia`,
    description:
      "Test your knowledge in this front-end app and answer questions about wijf [pkds with a fun, JavaScript trivia quiz!",
    image: Quiz,
    technologies: "JavaScript, HTML, CSS",
    githubLink: 'https://github.com/ZeeDabbagh/javascript-quiz',
    deployedLink: 'https://zeedabbagh.github.io/javascript-quiz/'
  },
  {
    name: `Social Network API`,
    description:
      "A back end application for a social network API where users can share their thoughts, react to friends’ thoughts, and create a friend list",
    image: SocialNetwork,
    technologies: "Express.js, Node JS, MongoDB/Mongoose",
    githubLink:'https://github.com/ZeeDabbagh/social-network-api',
    deployedLink: 'https://drive.google.com/file/d/17GxnbGjHxPkoJC-5NPrbG0Ir4Qcqm_Mf/view'
  },
  {
    name: `Password Generator`,
    description:
      "A Password Generator web app will randomly generate a password that meets certain criteria, so that you can create a strong password that provides greater security. ",
    image: Password,
    technologies: "HTML, CSS, JavaScript",
    githubLink:'https://github.com/ZeeDabbagh/password-generator',
    deployedLink: 'https://zeedabbagh.github.io/password-generator/'
  },
  {
    name: `E-Commerce Back-End`,
    description:
      "A back end application for an ecommerce site that ",
    image: Ecommerce,
    technologies: "addsometech",
    githubLink: 'https://github.com/ZeeDabbagh/ShopZeeStore-Back-End',
    deployedLink:'https://drive.google.com/file/d/1_TENgtwbjUhN51EhSExlZGKP8npr--Hr/view'
  },
];

export default function PortfolioItems() {
  return (
    <div>
      {projects.map((project, index) => (
        <div className="card-group col-3 mx-4" style={{display: 'inline-block'}}>
          <div 
        class="card col-4 mx-4"
        style={{
          width: "18rem",
          display: "inline-block",
          marginTop: "10px",
        }}>
          <div key={index}>
            <img
              src={project.image}
              alt={project.name}
              style={{ marginLeft: "35px", marginBottom: "10px" }}
            />
            <div class="card-body">
              <h5>{project.name}</h5>
              <p className="card-footer">
                <small>{project.technologies}</small>
              </p>
              <span style={{alignItems: 'center'}}>
               <a href={project.githubLink} style={{textDecoration:'none', color:'black'}}>GitHub </a> 
                <a href={project.deployedLink} style={{textDecoration:'none', color:'black'}}>Deployed App</a></span>
            </div>
          </div>
        </div>  
        </div>
        
      ))}
    </div>
  );
}
