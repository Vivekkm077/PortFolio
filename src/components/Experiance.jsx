
import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
import java from "../../public/java.png";
import tailwindcss from "../../public/tailwindcssjpg.jpg";
import sql from "../../public/sql.jpg";
import firebass from "../../public/firebassjpg.jpg";
import typescript from "../../public/typescript.jpg";
import bootstrap from "../../public/bootstrap.png";
import python from "../../public/python.webp";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: mongodb, name: "MongoDB" },
    { id: 5, logo: express, name: "Express" },
    { id: 6, logo: reactjs, name: "ReactJS" },
    { id: 7, logo: node, name: "NodeJS" },
    { id: 8, logo: java, name: "Java" },
    { id: 9, logo: python, name: "Python" },
    { id: 10, logo: typescript, name: "TypeScript" },
    { id: 11, logo: sql, name: "SQL" },
    { id: 12, logo: bootstrap, name: "Bootstrap" },
    { id: 13, logo: tailwindcss, name: "TailwindCSS" },
    { id: 14, logo: firebass, name: "Firebase" },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 dark:bg-gray-900 dark:text-gray-100"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="text-xl">
          As a final-year engineering student, I have built a strong foundation
          in the following technologies through coursework, hands-on projects,
          and personal development efforts.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-2 border-gray-300 dark:border-gray-700 rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <img
                src={logo}
                className="w-[150px] rounded-full"
                alt={name}
              />
              <div className="mt-2 text-sm font-medium">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;


