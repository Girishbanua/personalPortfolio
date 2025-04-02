import { useState } from "react";
import "./index.css";
import Typewriter from "typewriter-effect";

const App = () => {
  const [click, setClick] = useState(false);
  const [change, setChange] = useState(true);
  const handleNav = () => {    
    console.log(click ? "block" : "hidden");
    setClick(!click);
    setChange(!change);
  }
  return (
    <div className="grayGradientText p-2 sm:p-4 Container w-[100vw] overflow-hidden">
      <div className="blurBG bg-blue-600 h-11 w-11 scale-[3] -z-10 rounded-full filter blur-xl brightness-150 absolute left-2 -top-4"></div>
      <nav>
        <h1 onClick={handleNav} className="text-2xl leading-6 cursor-pointer sm:3xl font-elegant font-semibold sm:z-10">
          Girish Ch. Banua <br />
          <span className="text-xl font-light tracking-widest">
            | Portfolio
          </span>
        </h1>
        {/* Mobile View */}
        <div className="sm:hidden block z-10">
          {change ? <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 "
            onClick={handleNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg> : <img src="/public/close.png" alt="close" className="invert w-10 h-10" onClick={handleNav} /> }
        </div>
        {click && <div className=" absolute -right-5 top-0 p-9 bg-darkBg w-[75%] h-screen rounded-l-3xl backdrop-blur-xl ">
          <ul className="flex flex-col gap-10 my-16 text-xl ">
            <li>Home</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </div>}
        {/* Desktop View */}
        <div className="sm:block hidden">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="bgImgProfile grayscale">
          <img
            src="new.jpg"
            alt="profile image"
            className=" my-2 rounded-3xl h-[25rem] w-full object-cover md:h-[35rem] md:object-[10%_37%] "
          />
        </div>
        <div className="md:text-center">
          <h1>
            Hello there, <br className="md:hidden block" /> this is{" "}
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
        <section className=" border-2 border-blue-600 md:border-0 md:p-2 rounded-3xl p-4 md:my-40 aboutMe my-20 md:flex justify-evenly gap-5  ">
          <div className="bgImgProfile shrink hidden md:block ">
            <img
              src="new.jpg"
              alt="profile image"
              className="my-2 rounded-3xl h-[25rem] object-cover md:h-[35rem] md:object-[10%_37%] grayscale "
            />
          </div>
          <div className=" flex flex-col ">
            <h1>About me</h1>
            <p className="italic md:mt-20">
              Crafting web experiences with love
              <span className="not-italic redGradientText">❣️</span>
            </p>
            <p className="max-w-[34rem] mt-5 md:text-justify">
              Passionate about web technologies, I enjoy turning ideas into
              functional and efficient applications. Currently exploring new
              tools and frameworks while sharing my knowledge in computer
              science.
            </p>
            <div className="relative mt-11 mb-5 self-end md:self-start ">
              <button className=" bg-darkBg text-gray-300">Know more...</button>
              <div className="borderButton"></div>
            </div>
          </div>
        </section>
        {/* ------------------technologies section-------------------- */}
        <section className="technologies p-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center">Technologies</h1>
            <div className="techs flex justify-center items-center my-10 gap-10 flex-wrap max-w-[45rem]">
              <div>
                <img src="/icons8-java (1).svg" alt="tech logo" />
                <li>Java</li>
              </div>
              <div>
                <img src="/icons8-react-native.svg" alt="tech logo" />
                <li>React JS</li>
              </div>
              <div>
                <img src="/icons8-javascript.svg" alt="tech logo" />
                <li>Next JS</li>
              </div>
              <div>
                <img src="/icons8-mongodb.svg" alt="tech logo" />
                <li>MongoDB</li>
              </div>
              <div>
                <img
                  src="/icons8-postman-api.svg"
                  alt="tech logo"
                  className="saturate-100"
                />
                <li>Postman API</li>
              </div>
              <div>
                <img src="/icons8-postgres.svg" alt="tech logo" />
                <li>PostgreSQL</li>
              </div>
              <div>
                <img src="/icons8-nodejs.svg" alt="tech logo" />
                <li>Node JS</li>
              </div>
              <div>
                <img src="/icons8-tailwind-css.svg" alt="tech logo" />
                <li>Tailwind CSS</li>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------projects section-------------------- */}
        <section>
          <div>
            <h1>Projects</h1>
            <div className="flex flex-wrap flex-col md:flex-row gap-5 ">
              <div className="project">
                <div className="h-[50%] bg-slate-800 rounded-2xl">
                  <img src="" alt="" />
                </div>
                <div className="mt-4">
                  <h2>Project Heading</h2>
                  <span>HTML / CSS / JavaScript</span>
                  <p>
                    project description Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Fugit, ratione.
                  </p>
                </div>
              </div>
              <div className="project">
                <div className="h-[50%] bg-slate-800 rounded-2xl">
                  <img src="" alt="" />
                </div>
                <div className="mt-4">
                  <h2>Project Heading</h2>
                  <span>HTML / CSS / JavaScript</span>
                  <p>
                    project description Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Fugit, ratione.
                  </p>
                </div>
              </div>
              <div className="project">
                <div className="h-[50%] bg-slate-800 rounded-2xl">
                  <img src="" alt="" />
                </div>
                <div className="mt-4">
                  <h2>Project Heading</h2>
                  <span>HTML / CSS / JavaScript</span>
                  <p>
                    project description Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Fugit, ratione.
                  </p>
                </div>
              </div>
              <div className="project">
                <div className="h-[50%] bg-slate-800 rounded-2xl">
                  <img src="" alt="" />
                </div>
                <div className="mt-4">
                  <h2>Project Heading</h2>
                  <span>HTML / CSS / JavaScript</span>
                  <p>
                    project description Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Fugit, ratione.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
