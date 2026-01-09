import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{
        minHeight: "calc(100vh - 40px)",
        // paddingTop: "120px",
        paddingLeft: "40px",
        paddingRight: "40px",
        background: "radial-gradient(circle at center top, rgb(31 31 60), rgb(37 37 49))",
        color: "#d0d0d0",
      }}
    >
      {/* Inline styles for effects */}
      <style>{`
        .hero-name {
          font-size: clamp(2.8rem, 6vw, 4.2rem);
          font-weight: 800;
          letter-spacing: 1.5px;
          background: linear-gradient(90deg, #e6e8ff, #b6c2ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 18px rgba(120, 130, 255, 0.15);
          margin-bottom: 25px;
          transition: 
            transform 0.3s ease,
            text-shadow 0.3s ease,
            letter-spacing 0.3s ease;
        }

        .hero-name:hover {
          transform: translateY(-2px);
          letter-spacing: 2px;
          text-shadow:
            0 6px 22px rgba(88, 93, 168, 0.35),
            0 0 12px rgba(1, 3, 12, 0.4);
        }

        .hero-tagline {
          font-size: 1.5rem;
          color: #d46161;
          max-width: 800px;
        }

        .btn-hover {
          transition: all 0.3s ease;
        }

        .btn-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 255, 231, 0.2);
        }

        .social-link {
          color: #cfd3ff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: #00ffe7;
        }

        .leetcode-logo {
          height: 22px;
          margin-right: 0;
          filter: brightness(0) invert(1);
        }
        .leetcode-logo span {
            color: #cfd3ff;
        }

      `}</style>

      {/* Name */}
      <h1 className="hero-name">Mohammed Navas A</h1>

      {/* Role */}
      <h3 className="hero-tagline">
        Aspiring Full-Stack Developer | AI & Web Enthusiast
        <br />
        Building Scalable Solutions for Real-World Problems
      </h3>

      {/* Short description */}
      <p className="mt-3" style={{ maxWidth: "750px", color: "#aeb3ff" }}>
        I focus on crafting clean web applications and intelligent systems by
        blending modern web development with practical AI solutions.
        <br />
        Open to internships & entry-level opportunities.
      </p>

      {/* Buttons */}
      <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center">
        <a href="/projects" className="btn btn-primary btn-hover px-4">
          View Projects
        </a>
        <a
          href="resume/MohammedNavas_A_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-info btn-hover px-4"
        >
          Download Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-4 d-flex flex-wrap gap-4 justify-content-center">
        <a href="mailto:navash.a.v012@gmail.com" className="social-link">
          <i className="bi bi-envelope-fill me-1"></i>Email
        </a>
        <a href="https://github.com/navas-cloud" className="social-link">
          <i className="bi bi-github me-1"></i>GitHub
        </a>
        <a
          href="https://linkedin.com/in/mohammed-navas-a"
          className="social-link"
        >
          <i className="bi bi-linkedin me-1"></i>LinkedIn
        </a>
        <a href="https://leetcode.com/u/navas003" className="social-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            className="leetcode-logo" marginRight="0"
          />
          LeetCode
        </a>
      </div>
    </section>
  );
}

export default Home;
