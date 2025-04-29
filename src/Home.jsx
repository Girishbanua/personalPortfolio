import { useState } from "react";
import "./index.css";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import { AboutMeComp } from "./About";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" grayGradientText p-2 sm:p-4 Container w-[100vw] overflow-hidden">
      <div className="blurBG bg-blue-600 h-11 w-11 scale-[3] -z-10 rounded-full filter blur-xl brightness-150 absolute left-2 -top-4"></div>
      <NavbarComp />
      <main className="mt-20">
        <div className="bgImgProfile grayscale">
          <img
            src="new.webp"
            alt="profile image"
            loading="lazy"
            className=" my-2 rounded-3xl h-[25rem] w-full object-cover md:h-[32rem] md:object-[10%_37%] "
          />
        </div>
        <div className="sm:text-center">
          <h1>
            Hello there, <br className="sm:hidden block" /> this is{" "}
            <span className="blueGradientText text-[5rem]/[0.8] md:font-medium">
              Girish
            </span>
          </h1>
          <div>
            <h3 className="text-4xl font-thin">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Web Designer",
                    "Tech Enthusiast",
                    "Lifelong Learner",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
        </div>
        {/* ------------------aboutme section-------------------- */}
        <section
          className="relative border-2 border-blue-600 md:border-0 md:p-2 rounded-3xl p-4 md:my-40 
        my-20 flex flex-col items-center justify-center gap-10 "
        >
          <AboutMeComp height="false" />
          <div className="absolute bottom-0 bg-blue-900/20 w-full h-[25vh] backdrop-blur-sm rounded-2xl flex justify-center items-end">
            <div className="mt-11 mb-5 scale-110 ">
              <button
                className=" bg-darkBg text-gray-300"
                onClick={() => navigate("/about")}
              >
                Know more...
              </button>
              <div className="borderButton"></div>
            </div>
          </div>
        </section>
        {/* ------------------technologies section-------------------- */}
        <section className="technologies p-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center">Technologies</h1>
            <div className="flex gap-10 whitespace-nowrap overflow-hidden">
              <TechnologiesComp />
              <TechnologiesComp />
            </div>
          </div>
        </section>
        {/* ------------------projects section-------------------- */}
        <section>
          <div>
            <h1>Projects</h1>
            <div className="flex flex-wrap flex-col md:flex-row sm:gap-10 gap-3">
              <ProjectComp />
              <ProjectComp />
              <ProjectComp />
              <ProjectComp />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export const TechnologiesComp = () => {
  return (
    <div className="techs my-10 flex gap-10 animate-marquee ">
      <div>
        <img loading="lazy" src="/icons8-java (1).svg" alt="tech logo" />
        <li>Java</li>
      </div>
      <div>
        <img loading="lazy" src="/icons8-react-native.svg" alt="tech logo" />
        <li>React JS</li>
      </div>
      <div>
        <img loading="lazy" src="/icons8-javascript.svg" alt="tech logo" />
        <li>Next JS</li>
      </div>
      <div>
        <img loading="lazy" src="/icons8-mongodb.svg" alt="tech logo" />
        <li>MongoDB</li>
      </div>
      <div>
        <img
          loading="lazy"
          src="/icons8-postman-api.svg"
          alt="tech logo"
          className="saturate-100"
        />
        <li>Postman API</li>
      </div>
      <div>
        <img loading="lazy" src="/icons8-postgres.svg" alt="tech logo" />
        <li>PostgreSQL</li>
      </div>
      <div>
        <img loading="lazy" src="/icons8-nodejs.svg" alt="tech logo" />
        <li>Node JS</li>
      </div>
      <div>
        <img loading="lazy" src="/icons8-tailwind-css.svg" alt="tech logo" />
        <li>Tailwind CSS</li>
      </div>
    </div>
  );
};
export const NavbarComp = () => {
  const [click, setClick] = useState(false);
  const [change, setChange] = useState(true);
  
  const handleNav = () => {
    setClick(!click);
    setChange(!change);    
  };
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 sm:px-16 ">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl drop-shadow-lg leading-6 cursor-pointer sm:3xl font-elegant font-semibold sm:z-10"
      >
        Girish <span className="hidden sm:inline-block">Ch.</span> Banua <br />
        <span className="text-xl font-light tracking-widest">| Portfolio</span>
      </h1>
      {/* Mobile View */}
      <div className="sm:hidden block z-10">
        {change ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 "
            onClick={handleNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <img
            src="/close.webp"
            alt="close"
            className="invert w-10 h-10"
            onClick={handleNav}
            loading="lazy"
          />
        )}
      </div>
      {click && (
        <div className=" absolute -right-5 top-0 p-9 bg-darkBg w-[75%] h-screen rounded-l-3xl backdrop-blur-xl ">
          <ul className="flex flex-col gap-10 my-16 text-xl ">
            <NavListComp />
          </ul>
        </div>
      )}
      {/* Desktop View */}
      <div className="sm:block hidden">
        <ul className="flex gap-4">
          <NavListComp />
        </ul>
      </div>
    </nav>
  );
};
export const NavListComp = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(false);
    navigate("/about");
  };
  
  return (
    <>
      <li onClick={() => navigate("/")}>Home</li>
      { visible && <li onClick={handleVisible}>About</li>}
      <li><a href="#projects">Projects</a></li>
      <li>Resume</li>
      <li>Contact</li>
    </>
  );
};
export function ProjectComp() {
  return (
    <div className="project" id="projects">
      <div className="h-1/2 bg-slate-800 rounded-2xl">
        <img src="" alt="" />
      </div>
      <div className="mt-4 p-2 h-1/2 overflow-hidden">
        <h2>Project Heading</h2>
        <span>HTML / CSS / JavaScript</span>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
          project description Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Fugit, ratione.
        </p>
      </div>
    </div>
  );
}

export default Home;
