import React from "react";
import { BiCodeAlt, BiDesktop } from "react-icons/bi";
import { FaServer, FaLayerGroup, FaMicrochip, FaTools } from "react-icons/fa";

function Skills() {
  const skillsData = [
    {
      icon: <BiCodeAlt />,
      title: "Programming Languages",
      description: "Python, SQL, JavaScript",
      color: "text-primary",
    },
    {
      icon: <BiDesktop />,
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript, Bootstrap, React.js",
      color: "text-info",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Flask, Django, SQL Server, MySQL, REST APIs",
      color: "text-success",
    },
    {
      icon: <FaLayerGroup />,
      title: "Full-Stack Development",
      description: "Web Development, CRUD Apps, Authentication, Deployment",
      color: "text-warning",
    },
    {
      icon: <FaMicrochip />,
      title: "AI & Machine Learning",
      description: "Machine Learning, Deep Learning, NLP, OpenCV, TensorFlow/Keras, Scikit-learn",
      color: "text-danger",
    },
    {
      icon: <FaTools />,
      title: "Development Tools",
      description: "Git & GitHub, VS Code, Jupyter Notebook, Google Colab",
      color: "text-info",
    },
  ];

  return (
    <section id="skills" className="py-5 pb-15 dark-section">
      <div className="container">
        <h2 className="text-center mb-5 heading fw-bold">Skills</h2>
        <div className="row g-4">
          {skillsData.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="skill-card d-flex align-items-center p-3">
                <div className={`skill-icon ${skill.color}`}>
                  {skill.icon}
                </div>
                <div className="skill-content">
                  <h5>{skill.title}</h5>
                  <p>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Professional Strengths */}
        <div className="col-12 mt-5">
          <div className="skill-card p-3">
            <h5 style={{ color: '#a8a5f8', marginLeft: '0.7rem' }}>Professional Strengths</h5>
            <p style={{ marginTop: '0.7rem' }}>
              Rapid learner of new technologies, adaptable to changing requirements, strong problem-solving ability, proactive and collaborative team player.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
