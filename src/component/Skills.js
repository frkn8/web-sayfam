import React from "react";

const skillsData = [
  {
    name: "JavaScript",
    description:
      "JavaScript is a programming language used to create dynamic behaviors on web pages. It can be used on both client-side (i.e., in the browser) and server-side (Node.js) environments. JavaScript has an object-oriented structure and can be used in various applications with the help of its robust library support.",
  },
  {
    name: "React.Js",
    description:
      "React.js is a popular open-source JavaScript library used for building user interfaces (UIs). It allows developers to create reusable UI components and efficiently manage the state of their applications, resulting in fast and scalable web applications.",
  },
  {
    name: "Node.Js",
    description:
      "Node.js is a popular open-source JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It is designed for building scalable, high-performance, and server-side applications using event-driven, non-blocking I/O model.",
  },
];

export default function MySkills() {
  return (
    <div className="my-skills-container">
      <div className="skills-content">
        <h3 className="skills-heading">My Skills</h3>
        <div className="skills-list">
          {skillsData.map((skill) => (
            <div className="skill">
              <div className="skill-heading">
                <div className="skill-name">
                  <h3>{skill.name}</h3>
                </div>
              </div>
              <div className="skill-description">
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}