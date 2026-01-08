import React from "react";

function Projects() {
  const projectsData = [
    {
      title: "PRIVYDESK – Role-Based Access Management Platform",
      date: "October 2025",
      description: "Built a secure web platform with role-based authentication and RESTful APIs, supporting scalable operations. Optimized database performance using SQLAlchemy with SQL Server and implemented analytics dashboards.",
      techStack: "Python, Django, SQLServer, HTML, CSS, Bootstrap, JavaScript",
      github: "#",
    },
    {
      title: "HabitHive – Habit Tracking System",
      date: "September 2025",
      description: "Developed a habit tracking system offering recommendations. Features include tracking, visualization, and reminders, with a responsive intuitive interface and backend managing habit data to support personal growth.",
      techStack: "HTML, CSS, JavaScript, Bootstrap, Flask, Python, SQL Server",
      github: "#",
    },
    {
      title: "Phishing Website Detection",
      date: "April 2025",
      description: "Developed an AI model to classify websites as phishing or benign using features and content-based analysis. Leveraged machine learning algorithms and language techniques in Python, achieving 87% accuracy while enhancing security and threat detection.",
      techStack: "Python, Machine Learning Algorithms, NLP",
      // github: "#",
    },
    {
      title: "Age, Gender & Emotion Detection",
      date: "November 2024",
      description: "Developed a deep learning model with MTCNN and OpenCV to detect age, gender, and emotions from images, achieving 67% accuracy in live detection scenarios.",
      techStack: "Python, TensorFlow, Keras, OpenCV, Deep Learning",
      // github: "#",
    },
    {
      title: "IoT Street Parking System",
      date: "April 2023",
      description: "Engineered an IoT-based smart street parking prototype managing 100+ vehicles daily using motion sensors, GPS, and a real-time web platform with cloud integration and analytics.",
      techStack: "Python, Flask/Node.js, Firebase/MySQL",
      // github: "#",
    },
    {
      title: "Diabetes Prediction System",
      date: "March 2024",
      description: "Developed a machine learning model using KNN and Decision Tree algorithms to predict diabetes risk from patient records, improving early detection and healthcare decision-making.",
      techStack: "Python, Machine Learning, scikit-learn, Pandas, NumPy",
      // github: "#",
    },
    {
      title: "Warehouse Tracking System",
      date: "",
      description: "Developed a secure warehouse tracking system with role-based login access. React frontend for dynamic interaction and SQL database integration for real-time inventory tracking.",
      techStack: "HTML, CSS, React.js, SQL",
      // github: "#",
    },
  ];

  return (
    <section id="project" className="py-5 dark-section">
      <div className="container">
        <h2 className="mb-4 fw-bold text-center heading">Projects</h2>

        <div className="row g-4">
          {projectsData.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="project-card p-4">
                {project.date && <div className="project-date">{project.date}</div>}
                <h5 className="project-title">{project.title}</h5>
                <p className="project-description">{project.description}</p>
                <p className="project-tech"><strong>Tech Stack:</strong> {project.techStack}</p>
                {/* {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    View on GitHub
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
