import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Inline styles */}
      <style>{`
        .dark-navbar {
			background: linear-gradient(
				180deg,
				#0b0b0d,
				#0f0f12
			);
			box-shadow: 0 6px 25px rgba(0, 0, 0, 0.8);
			backdrop-filter: blur(8px);
			height: 70px;
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
			margin-bottom: 5 !important;
  		padding-bottom: 0 !important;
		}

        .brand-name {
            font-size: 1.25rem;
            font-weight: 700;
            letter-spacing: 1px;
            background: linear-gradient(
            90deg,
            #7f7cff,
            #00ffe7
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 8px rgba(0, 255, 231, 0.35);
        }

        .brand-name span {
            font-weight: 400;
            opacity: 0.85;
        }

        .navbar-brand {
          color: #ffffff !important;
          font-size: 1.2rem;
          letter-spacing: 1px;
        }

        .nav-center {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
        }

        .nav-item-link {
          margin: 0 16px;
          font-size: 0.95rem;
          letter-spacing: 0.6px;
          color: rgba(200, 210, 255, 0.75);
          text-decoration: none;
          position: relative;
          transition: all 0.35s ease;
        }

        .nav-item-link:hover {
          color: #ffffff;
          text-shadow:
            0 0 6px rgba(127, 124, 255, 0.6),
            0 0 12px rgba(0, 255, 231, 0.35);
        }

        .nav-item-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: linear-gradient(
            90deg,
            #7f7cff,
            #00ffe7,
            #6affb7
          );
          transition: width 0.35s ease;
          border-radius: 2px;
        }

        .nav-item-link:hover::after,
        .nav-item-link.active::after {
          width: 100%;
        }

        .nav-item-link.active {
          color: #ffffff;
        }

        .resume-btn {
          padding: 8px 18px;
          border-radius: 25px;
          font-size: 0.85rem;
          letter-spacing: 0.6px;
          color: #ffffff;
          background: linear-gradient(
            135deg,
            #7f7cff,
            #00ffe7
          );
          text-decoration: none;
          transition: all 0.35s ease;
          box-shadow: 0 0 12px rgba(0, 255, 231, 0.4);
        }

        .resume-btn:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 16px rgba(127, 124, 255, 0.6),
            0 0 24px rgba(0, 255, 231, 0.5);
          color: #ffffff;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg fixed-top dark-navbar">
        <div className="container-fluid position-relative">

          {/* Left - Brand */}
          <NavLink className="navbar-brand brand-name" to="/">
            MohammedNavas A
        	</NavLink>


          {/* Center - Nav Links */}
          <div className="nav-center">
            <NavLink className="nav-item-link" to="/" end>
              Home
            </NavLink>
            <NavLink className="nav-item-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-item-link" to="/achievements">
              Achievements
            </NavLink>
            <NavLink className="nav-item-link" to="/projects">
              Projects
            </NavLink>
            <NavLink className="nav-item-link" to="/skills">
              Skills
            </NavLink>
            <NavLink className="nav-item-link" to="/contact">
              Contact
            </NavLink>
          </div>

          {/* Right - Resume Button */}
          <div className="ms-auto">
            <a
              href="/resume/MohammedNavas_Resume.pdf"
              className="resume-btn"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
