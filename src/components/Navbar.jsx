import { NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <style>{`
        .dark-navbar {
          background: linear-gradient(180deg, #0b0b0d, #0f0f12);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          height: 70px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .brand-name {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #7f7cff, #00ffe7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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

        .nav-item-link:hover,
        .nav-item-link.active {
          color: #ffffff;
        }

        .nav-item-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #7f7cff, #00ffe7, #6affb7);
          transition: width 0.35s ease;
        }

        .nav-item-link:hover::after,
        .nav-item-link.active::after {
          width: 100%;
        }

        .resume-btn {
          padding: 8px 18px;
          border-radius: 25px;
          font-size: 0.85rem;
          color: #fff;
          background: linear-gradient(135deg, #7f7cff, #00ffe7);
          text-decoration: none;
          box-shadow: 0 0 12px rgba(0, 255, 231, 0.4);
        }
          
        .mobile-resume {
          display: none;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 2rem;   /* smaller size */
          color: #ececec;      /* blue color */
          cursor: pointer;
          padding: 6px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }
          
          .mobile-resume {
            display: inline-block
          }

          .nav-center {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            transform: none;
            flex-direction: column;
            background: #0f0f12;
            padding: 1rem 0;
            display: none;
          }

          .nav-center.open {
            display: flex;
          }

          .nav-item-link {
            margin: 10px 0;
            font-size: 1rem;
          }

          .ms-auto {
            display: none;
          }
        }
      `}</style>

      <nav className="navbar fixed-top dark-navbar">
        <div className="container-fluid position-relative">

          {/* Brand */}
          <NavLink className="navbar-brand brand-name" to="/">
            MohammedNavas A
          </NavLink>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* Nav Links */}
          <div
            ref={menuRef}
            className={`nav-center ${open ? "open" : ""}`}
          >
            <NavLink className="nav-item-link" to="/" end onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink className="nav-item-link" to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink className="nav-item-link" to="/achievements" onClick={() => setOpen(false)}>Achievements</NavLink>
            <NavLink className="nav-item-link" to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
            <NavLink className="nav-item-link" to="/skills" onClick={() => setOpen(false)}>Skills</NavLink>
            <NavLink className="nav-item-link" to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

            {/* Resume inside mobile menu */}
            <a
              href="/resume/MohammedNavas_A_Resume.pdf"
              className="resume-btn mt-2 mobile-resume"
              download
            >
              Resume
            </a>
        
          </div>

          {/* Desktop resume */}
          <div className="ms-auto d-none d-md-block">
            <a
              href="/resume/MohammedNavas_A_Resume.pdf"
              className="resume-btn"
              download
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
