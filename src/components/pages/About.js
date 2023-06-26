import React from "react";
import Headshot from '../../assets/images/me.png'

const styles = {
  divBackground: {
    backgroundColor: 'pink',
    marginLeft: ".5rem",
    marginRight: ".5rem",
    
  },
  cardStyles: {
    width: '60rem',
    marginLeft: '8px',
    marginBottom: '20px',
    display: 'inline-block',
    backgroundColor: 'pink', 
    color:'whitesmoke',
    border:'none'
  },
  headingStyles: {
    color: 'whitesmoke'
  },
  cardBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
}

export default function About() {
  return (
    <div style={styles.divBackground}>
      <div
        className="card"
        style={styles.cardStyles}
      >
        <div className="card-body" style={styles.cardBackground} >
          <h3 className="card-title">About me!</h3>
          <h5 className="card-subtitle mb-2 mt-3">Hi! I'm Zainab</h5>
          <p className="card-text">
            I'm a full-stack software developer with a focus on web development.
            I recently completed a comprehensive boot camp where I gained
            proficiency in front-end technologies like HTML, CSS, JavaScript,
            React, and Handlebars. Additionally, I developed expertise in
            back-end technologies such as Node.js, SQL/Sequelize,
            MongoDB/Mongoose, and GraphQL. Throughout the boot camp, I actively
            engaged in hands-on projects that allowed me to apply my skills in a
            practical setting. Collaborating with talented peers, I honed my
            ability to work effectively in teams, communicate ideas clearly, and
            solve complex problems. I thrive in fast-paced environments and
            consistently deliver high-quality results within tight deadlines.
          </p>
          <p className="card-text">
            In addition to my technical skills, I have a strong foundation in
            management and business development with 10 years of experience in
            the non-profit world.
          </p>

          <p className="card-text">
            This diverse background, combined with my comprehensive boot camp
            training, enables me to approach software development from various
            perspectives.
          </p>
          <p className="card-text">
            I'm excited to explore potential collaborations and make a positive
            impact in the world of software development. Let's connect!
          </p>
        </div>
      </div>
      <div class="card col-4 mx-4" style={{width:"18rem", display: 'inline-block', backgroundColor: 'pink', marginTop: '10px', border: 'none'}}>
        <img
          class="card-img-top"
          src={Headshot}
          alt="me drinking orange chicken"
          style={{backgroundColor: 'pink'}}
        />
        <div class="card-body" style={{backgroundColor: "#FCBACB"}}>
          <p class="card-text text-white px-5" style={styles.cardBackground}>
          What's that? You want to know a fun fact about me? Well ok! I lived
            in 7 different countries, 3 in the Middle East, 3 in Europe and the
            US!
          </p>
        </div>
      </div>
    </div>
  );
}
