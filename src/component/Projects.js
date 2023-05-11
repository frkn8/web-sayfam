import React from "react";

const myData = [
  {
    projectName: "Watchlist",
    projectAim:
      "React JS operates in a component-based structure that facilitates the design and management of the application's UI. These components represent parts of the application and ensure reusability. Additionally, a data structure is used to track the tasks and completion statuses added by users.sed to update this data structure and re-render.",
    projectLanguage: ["React", "Redux", "Axios"],
    projectUrl: "https://furkan-calculator.vercel.app/",
    projectImage: "wtchlist.png",
  },
  {
    projectName: "Shopping Cart",
    projectAim:
      "This is a shopping cart project built with React.js. The project utilizes React Router and styled-components for UI, and useContext for state management. The CartContext and ProductContext are used to manage the cart and product data respectively. The app renders a list of products on the Products page, and users can add products.",
    projectLanguage: ["React", "Redux", "Axios"],
    projectUrl: "https://shopping-cart-sigma-one.vercel.app/",
    projectImage: "shopping-cart.png",
  },
  {
    projectName: "Film Project",
    projectAim:
      "This project is a web application created using the React library. Redux is used for managing the application state. React Router is used for navigating between different pages. The user interface of the application is designed using a CSS. Used react-redux , react-router-dom , redux-logger , and @redux-devtools/extension.",
    projectLanguage: ["React", "Redux", "Axios"],
    projectUrl: "https://films-8dg4zrrki-frkn8.vercel.app/movies",
    projectImage: "film.png",
  },
];

export default function Projects({ language }) {
  return (
    <div className="my-projects-container">
      <div className="my-projects">
        <div className="my-project-col">
          <h1 className="profile-heading">Projects</h1>
          <div className="my-pro">
            {myData.map((project, index) => (
              <div className="my-cards" key={index}>
                <img
                  src={project.projectImage}
                  alt="my-projects"
                  className="my-projects-photos"
                />
                <h3 className="my-content-heading">{project.projectName}</h3>
                <p className="my-description-project">
                  {project.projectAim}
                </p>
                <div className="my-programs">
                  {project.projectLanguage.map((lang, index) => (
                    <p key={index}>{lang}</p>
                  ))}
                </div>
                <div className="links">
                  <a
                    href="https://github.com/frkn8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {language === "en" ? "View Site" : "Siteyi Gör"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}