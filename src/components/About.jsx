import React from "react";

import CodeforcesLogo from "../../public/cp.png";
import leetcode from "../../public/lc.png";
import CodeChefLogo from "../../public/cc.png";


function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-5xl font-bold mb-5 dark:text-white">About</h1>
        <p className=" dark:text-gray-300">
            Hi, I’m Vivek Kumar, a dedicated B.Tech ECE student at NSUT (Netaji Subhas University of Technology) with a deep passion for problem-solving and web development.  
              <br></br>
              I’ve honed my analytical skills by solving problems on Leetcode, CodeChef, and CodeForces. These experiences have equipped me with a structured approach to tackling challenges and optimizing solutions.  
              <br></br>
              I’m enthusiastic about creating impactful web applications. From developing full-stack MERN projects to building responsive and user-friendly interfaces, I enjoy transforming ideas into functional and efficient software solutions. My goal is to merge my problem-solving expertise with my web development skills to create technology that makes a difference.  
            
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl dark:text-green-400">
          Education
        </h1>
        <span className="dark:text-gray-300">
        <strong>B.Tech</strong> in Electronics and Communication Engineering <strong>ECE</strong>, Netaji
          Subhas University of Technology <strong>(NSUT)</strong>, 2021-2025
        </span>
        <br></br>
        <br />
        <h1 className="text-green-600 font-semibold text-xl dark:text-green-400">
          Technical Skills
        </h1>
        <span className="dark:text-gray-300">
          <strong>Languages:</strong> Java, Python, C, JavaScript, SQL <br />
          <strong>Backend:</strong> Node.js, Express.js, MongoDB, AppWrite <br />
          <strong>Frontend:</strong> React.js, Next.js, TailwindCSS, HTML, CSS,
          Bootstrap <br />
          <strong>Developer Tools:</strong> VS Code, Canva, GitHub, Postman
        </span>
        <br />
        <br />
        {/* <h1 className="text-green-600 font-semibold text-xl dark:text-green-400">
          Certificatons
        </h1>
        <span className="dark:text-gray-300">
          [DSA with JAVA ], [Apna College], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span> */}
        {/* <br /> */}
        {/* <br /> */}
        <h1 className="text-green-600 font-semibold text-xl dark:text-green-400">
          Achievements & Awards
        </h1>
        <ul className="list-disc pl-5 dark:text-gray-300">
          <li>Ranked Pupil on CodeForces</li>
          <li>3 star on CodeChef</li>
          <li>Secured Global Rank 25 in CodeChef Starters 166 Division 3</li>
          <li>Knight on Leetcode</li>
          <li>Solved 1000+ Problems on Leetcode with a maximum rating of 1855</li>
          <li>Solved 150+ Problems across GeeksforGeeks and InterviewBit</li>
        </ul>
        <div className="mt-5 flex items-center space-x-5">
        <a href="https://leetcode.com/u/vivek__kumar__090/" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src={leetcode} alt="LeetCode Logo" className="w-10 h-10" />
            <span className="dark:text-gray-300">
              <strong>LeetCode:</strong> Knight 
            </span>
          </div>
        </a>
        <a href="https://www.codechef.com/users/vivek4565" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src={CodeChefLogo} alt="codechef Logo" className="w-10 h-10" />
            <span className="dark:text-gray-300">
              <strong>CodeChef:</strong> 3 Star 
            </span>
          </div>
        </a>
        <a href="https://codeforces.com/profile/vivek_kumar_30" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={CodeforcesLogo} alt="cf Logo" className="w-10 h-10" />
          <span className="dark:text-gray-300">
            <strong>CodeForce:</strong> Pupil 
          </span>
        </div>
      </a>
        </div>
        <br />
        <h1 className="text-green-600 font-semibold text-xl dark:text-green-400">
          Mission Statement
        </h1>
        <p className="dark:text-gray-300">
          My mission is to leverage my skills and creativity to deliver
          innovative web solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;


