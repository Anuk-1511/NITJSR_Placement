import React from "react";
import Card from "./Card";
import m1 from "../assets/images/tpo.jpg";
import m from "../assets/team22/m.jpeg";
import sa from "../assets/team22/sa.jpeg";
import sk from "../assets/team22/sk.jpeg";

const containerStyle = {
  background: "hsla(213, 77%, 14%, 1)",
  background: "linear-gradient(360deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)",
  background: "-moz-linear-gradient(360deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)",
  background: "-webkit-linear-gradient(360deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)",
};

const contactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ containerStyle }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">The Team</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={m1}
                alt=""
                name=""
                isTeacher={false}
                position="Training and Placements Officer"
                email="placements@nitjsr.ac.in, tpo@nitjsr.ac.in"
                linkedin=""
                islinkedin={true}                
                isPhone={false}
                isEmail={true}
              />
              <Card
                src={m}
                alt="Mritunjay Kumar"
                name="Mritunjay Kumar"
                isTeacher={false}
                position="Coordinator"
                email="placements@nitjsr.ac.in "
                phone="+91-"
                linkedin="https://www.linkedin.com/in/mritkumar/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={sa}
                alt="Sadhvi"
                name="sadhvi"
                isTeacher={false}
                position="Coordinator"
                email="placements@nitjsr.ac.in "
                phone="+91-"
                linkedin="https://www.linkedin.com/in/sadhvi-khatik/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={sk}
                alt="ShashiKant"
                name="ShashiKant"
                isTeacher={false}
                position="Coordinator"
                phone="+91-"
                email="placements@nitjsr.ac.in"
                linkedin="https://www.linkedin.com/in/kt-shashi/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          
            </div>
          </div>
    </React.Fragment>
  );
};

export default contactUs;
