import React from "react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    title: "Caring Hands",
    description: "Donation platform for old clothes with full-stack MVC architecture.",
    live: "https://caring-hands.onrender.com/listings",
    repo: "https://github.com/theparinikakath/Caring-Hands/tree/new-branch",
    image: "/src/assets/caring.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Flappy Bird with Hand Gestures",
    description: "A gesture-controlled version of Flappy Bird using MediaPipe and OpenCV.",
    repo: "https://github.com/theparinikakath/Flappy-Bird-using-hand-gestures",
    image: "/src/assets/flappy.png",
    tech: ["Python", "OpenCV", "MediaPipe"],
  },
  {
    title: "Admin Dashboard UI",
    description: "RBAC role-management dashboard built with React & React-Bootstrap.",
    repo: "https://github.com/theparinikakath/Admin-Dashboard-UI",
    image: "/src/assets/admin.png",
    tech: ["React", "Bootstrap", "RBAC"],
  },
  {
    title: "HappyHour",
    description: "Simplified WhatsApp clone with real-time messaging.",
    repo: "https://github.com/theparinikakath/Happy-Hour",
    image: "/src/assets/happy.png",
    tech: ["React", "Socket.io", "Node.js"],
  },
  {
    title: "Weather App",
    description: "Frontend-only app displaying real-time weather using OpenWeather API.",
    repo: "https://github.com/theparinikakath/Weather-App",
    image: "/src/assets/weather.png",
    tech: ["React", "Material UI"],
  },
  {
    title: "Simon Says Game",
    description: "Classic memory game built using HTML, CSS, and JavaScript.",
    repo: "https://github.com/theparinikakath/Simon-Says-Game",
    image: "/src/assets/simon.png",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Quora Replica",
    description: "A forum-style app where users can post, update, and delete questions.",
    repo: "https://github.com/theparinikakath/Quora-Replica",
    image: "/src/assets/quora.png",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-5 text-center">Projects</h2>
      <div className="row gx-4 gy-5">
        {PROJECTS.map((p, i) => (
          <div key={i} className="col-sm-6 col-lg-4">
            <div className="card h-100 project-card">
              {p.image && (
                <img src={p.image} className="card-img-top" alt={p.title} />
              )}
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="card-title mb-0">{p.title}</h5>
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
                <p className="card-text mt-2 flex-grow-1">{p.description}</p>
                {p.tech && (
                  <div className="mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="badge bg-secondary me-1">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .project-card {
          background-color: #1e1e1e;
          color: #fff;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        }
        .card-img-top {
          max-height: 180px;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}
