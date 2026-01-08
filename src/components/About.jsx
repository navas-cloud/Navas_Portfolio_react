import React from "react";

function About() {
  return (
    <section id="about" className="py-5 dark-section">
      <div className="container">
        <h2 className="mb-4 fw-bold text-center heading">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-10 mx-auto">
            <div className="about-card p-4">
              <p>
                Hi, I'm <strong>Mohammed Navas A</strong>, an aspiring 
                <strong> Full-Stack Developer</strong> with a passion for 
                <strong> problem-solving, web development, and AI-powered solutions</strong>. 
                I graduated with a <strong>Bachelor of Engineering in Computer Science</strong> 
                at <strong>K.L.N. College of Engineering, Madurai.</strong>
              </p>

              <p>
                I enjoy building practical and scalable applications — from 
                <strong> web projects</strong> like warehouse tracking and smart parking systems 
                to <strong> AI/ML models</strong> such as phishing website detection and age/emotion recognition.
              </p>

              <p>
                Outside academics, I actively participated in and organized 
                <strong> hackathons</strong> and <strong>tech fest events</strong>, earning certifications like 
                <strong> AWS Academy Cloud Foundations</strong>, while developing leadership skills and fueling continuous learning.
              </p>

              <p>
                I am also passionate about <strong>collaboration and mentoring</strong>, helping peers in coding, AI projects, and problem-solving challenges. 
                My goal is to contribute to impactful projects while continuously improving my technical and interpersonal skills.
              </p>

              <p>
                <em>Core Interests:</em> Full-Stack Development, Python Development, AI/ML, Software Development, Open-Source Contributions
              </p>

              <p>
                <em>Languages I Speak:</em> English, Tamil, Japanese
              </p>

              {/* Timeline */}
              <div className="timeline-container mt-4">
                <div className="timeline-column">
                  <h3 className="timeline-heading">Education</h3>
                  <div className="timeline">
                    <div className="timeline-item">
                      <span className="timeline-date">Sep 2021 – Apr 2025</span>
                      <h5>K.L.N. College of Engineering, Madurai</h5>
                      <p>Bachelor of Engineering in Computer Science</p>
                      <p><strong>CGPA:</strong> 7.67/10.0</p>
                    </div>
                    <div className="timeline-item">
                      <span className="timeline-date">Jun 2020 – Apr 2021</span>
                      <h5>Virudhunagar Hindu Nadar Higher Secondary School</h5>
                      <p>Higher Secondary Certificate (HSC)</p>
                      <p><strong>Achieved:</strong> 90.2%</p>
                    </div>
                  </div>
                </div>

                <div className="timeline-column">
                  <h3 className="timeline-heading">Experience</h3>
                  <div className="timeline">
                    <div className="timeline-item">
                      <span className="timeline-date">Sep 2023 – Oct 2023</span>
                      <h5>Freelance Video Designer</h5>
                      <p>
                        Conceptualized, designed, and edited over 10 engaging medical advisory videos, enhancing visual storytelling, simplifying complex healthcare information, and promoting awareness on important medical topics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Timeline */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
