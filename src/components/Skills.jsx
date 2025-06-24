import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiRender,
  SiVercel,
  SiDocker, // ✅ Import Docker icon
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "Python", icon: <FaPython color="#306998" /> },
    { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
    { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
    { name: "Express.js", icon: <FaNodeJs color="#000000" /> },
    { name: "Redux", icon: <SiRedux color="#05998B" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
    { name: "MySQL", icon: <SiMysql color="#00758F" /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
    { name: "GitHub", icon: <FaGithub color="#171515" /> },
    { name: "Render", icon: <SiRender color="#3BA9FC" /> },
    { name: "Vercel", icon: <SiVercel color="#000000" /> },
    { name: "Docker", icon: <SiDocker color="#0db7ed" /> },
  ];

  const layers = [[0, 1, 2, 3, 4, 5, 6, 7],[8, 9, 10, 11, 12, 13],[14, 15, 16, 17, 18], ];

  return (
    <section id="skills" className="container py-5 text-center">
      <h2 className="mb-5">Skills</h2>

      {layers.map((layer, rowIndex) => (
        <div
          key={rowIndex}
          className="d-flex justify-content-center flex-wrap gap-4 mb-4 skill-row"
        >
          {layer.map((index) => (
            <div key={index} className="text-center skill-item">
              <div className="skill-icon-wrapper">
                <div className="skill-icon">{skills[index].icon}</div>
              </div>
              <p className="mt-2" style={{ fontWeight: 500 }}>
                {skills[index].name}
              </p>
            </div>
          ))}
        </div>
      ))}

      <style>{`
        .skill-icon-wrapper {
          perspective: 600px;
        }

        .skill-icon {
          font-size: 3rem;
          width: 80px;
          height: 80px;
          margin: auto;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #ffffff33, #ffffff0a);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s ease;
          will-change: transform;
        }

        .skill-icon:hover {
          transform: rotateY(15deg) rotateX(10deg) scale(1.1);
        }

        @media (max-width: 576px) {
          .skill-item {
            flex: 0 0 30%;
            max-width: 30%;
          }
        }
      `}</style>
    </section>
  );
}
