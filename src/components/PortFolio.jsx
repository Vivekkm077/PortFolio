

import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";


import simon_image from "../../public/simon_image.png";
import blog_image from "../../public/blog_image.jpg";
import chatApp from "../../public/chatApp.jpg";
import nquee from "../../public/nquee.png";
import todo from "../../public/todo.jpg";
import weather from "../../public/weather.jpg";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: blog_image,
      name: "Blogging",
      videoLink: "https://www.youtube.com/watch?v=QT9e8XTOJf4",
      sourceCodeLink: "https://github.com/Vivekkm077/MERN-BLOGS",
      tex:"MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Context API , Firebass"
    },
    {
      id: 2,
      logo: chatApp,
      name: "Chat App",
      videoLink: "https://youtu.be/cqo-w-1igng",
      sourceCodeLink: "https://github.com/Vivekkm077/ChatApp",
      tex:"MongoDB, Express.js, React.js, Node.js, JWT, Socket IO, Zustand"
    },
    {
      id: 3,
      logo: weather,
      name: "Weather App",
      videoLink: "https://youtu.be/W1-_ckMBx4A",
      sourceCodeLink: "https://github.com/Vivekkm077/weather",
      tex:"React.js, Material UI, Open Weather API"
    },
    {
      id: 4,
      logo: todo,
      name: "To-Do App",
      videoLink: "https://youtu.be/SAkQUm9tTPI",
      sourceCodeLink: "https://github.com/Vivekkm077/todo-App/tree/master",
      tex:"MongoDB, Express.js, React.js, Node.js, Tailwind CSS, JWT, Zod"
    },
    {
      id: 5,
      logo: simon_image,
      name: "Simon-says-game",
      videoLink: "https://github.com/Vivekkm077/Simon-says-game/blob/main/Simon-says-game-preview.mp4",
      sourceCodeLink: "https://github.com/Vivekkm077/Simon-says-game",
      tex:"HTML, CSS, JavaScript"
    },
    {
      id: 6,
      logo: nquee,
      name: "N - Queen",
      videoLink: "https://github.com/Vivekkm077/N-Queen/blob/main/NQueen/visualisation.gif",
      sourceCodeLink: "https://github.com/Vivekkm077/N-Queen",
      tex:"HTML, CSS, JavaScript"
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
          {cardItem.map(({ id, logo, name, videoLink, sourceCodeLink ,tex}) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                {tex}
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Video
                </a>
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;



