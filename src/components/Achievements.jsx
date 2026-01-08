import React from "react";

function Achievements() {
  const achievementsData = [
    {
      title: "Python Full-Stack Development Certification",
      description:
        "Completed an intensive Python Full-Stack Development program at Innovel Training Center, gaining hands-on experience in full-stack web development.",
      project:
        "Developed PRIVYDESK, a secure role-based access management platform with REST APIs, optimized database performance, and analytics dashboards.",
      github: "https://github.com/navas-cloud/User_Authentication",
      // certificate: "#",
    },
    {
      title: "Infosys Foundation Finishing School",
      description:
        "Completed the Infosys Foundation Finishing School (Employability Program), an intensive one-month training focused on AI using Microsoft Azure. Gained experience in Computer Vision, OCR, and cloud services through structured labs, scenarios, assessments, and a capstone project demonstrating application of learned skills.",
      certificate:
        "https://drive.google.com/file/d/1f02ccZm28BmrEdLVs8y0iF0P0Dfrji1P/view?usp=sharing",
    },
    {
      title: "Smart India Hackathon 2023",
      description:
        "Participated in SIH 2023, collaborating with a diverse team to deliver innovative, practical, and scalable solutions under tight deadlines with effective teamwork and problem-solving skills.",
      project:
        "Built an IoT-based smart parking system managing 100+ vehicles daily using motion sensors, GPS, and a real-time web platform.",
      certificate:
        "https://drive.google.com/file/d/1WjKEbQvvyA4t0DS-d5hWpReJl_gepULe/view?usp=sharing",
    },
    {
      title: "Tech Fest 2k23 & 2k24 Organizer",
      description:
        "Participated in Tech Fest 2k23 by presenting a technical project and organized Tech Fest 2k24, leading four competitive rounds. Demonstrated leadership, coordination, problem-solving, and effective communication while ensuring smooth event execution.",
      certificate:
        "https://drive.google.com/file/d/1qC-tH93hAXyfksLS3p5CRFn-vjYnm1og/view?usp=sharing",
    },
    {
      title: "Hackathon 2k24 Organizer",
      description:
        "Successfully organized an intercollege Hackathon 2024 with 30+ teams, managing logistics, schedules, and events. Led with dedication, fostering innovation, collaboration, and teamwork among students while ensuring smooth and efficient execution.",    
      certificate:
        "https://drive.google.com/file/d/1nR5oAa4fogUdlMubOPXvfLI045OUt6pL/view?usp=sharing",
    },
    {
      title: "AWS Academy Graduate",
      description:
        "Completed AWS Academy Cloud Foundations in a one-month program, gaining practical knowledge of cloud computing, AWS services, and deployment. Engaged in hands-on lab exercises, building scalable applications while applying real-world cloud solutions.",
      certificate:
        "https://drive.google.com/file/d/1TNkmsMeqAxGeetcfiaAjR6_oWREIUcw7/view?usp=sharing",
    },
    {
      title: "Cricket House Match Winners",
      description:
        "Part of the Blue House cricket team, winning the 2024 college championship. Demonstrated teamwork, leadership, strategic planning, and sportsmanship.",
      certificate:
        "https://drive.google.com/file/d/107rs0jDdqPPUPbYwkRd_cK1L6gR7M78C/view?usp=sharing",
    }, 
    {
      title: "Google Prompting Essentials",
      description:
        "Completed Google Prompting Essentials, mastering AI prompting techniques, productivity strategies, and practical AI tool applications for real-world use cases.",
      certificate:
        "https://drive.google.com/file/d/1FlXq6b9bG6eeGkEchffgaTYnLAUOMGN3/view?usp=sharing",
    },
  ];

  return (
    <section id="achievement" className="py-5 dark-section">
      <div className="container">
        <h2 className="mb-4 fw-bold text-center heading">Achievements</h2>

        <div className="row g-4 justify-content-center">
          {achievementsData.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="achievement-card p-4 h-100">
                <h5 className="achievement-title">{item.title}</h5>
                <p className="achievement-description">{item.description}</p>

                {item.project && (
                  <p className="achievement-project">
                    <strong>Project:</strong> {item.project}{" "}
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                      View on GitHub
                      </a>
                    )}
                  </p>
                )}

                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
