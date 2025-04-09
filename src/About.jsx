const About = () => {
  return (
    <div className="p-4">
      <AboutMeComp />
      <h2>Education</h2>
      <h2>Hobbies</h2>
    </div>
  );
};
export const AboutMeComp = () => {
  return (
    <div className="overflow-hidden">
      <h1>About Me</h1>
      <div className="bg-blue-900/40 overflow-ellipsis rounded-xl flex flex-col-reverse sm:flex-col gap-5 md:flex-row">     
        <p className="  backdrop-blur-lg rounded-xl p-4 text-2xl font-light h-[25rem] sm:h-full ">
          <b className="blueGradientText text-4xl">Hi, I’m Girish!</b> an
          aspiring software developer with a{" "}
          <b className="blueGradientText">deep interest in web development </b>
          and its related technologies. <br />
          <br />
          Though I don’t come from a formal background in web design or
          development. I’ve been
          <span className="blueGradientText">
            {" "}
            passionately learning and building projects
          </span>{" "}
          in this field for over two years.
          <br /> My journey into tech began <span className="">. . .</span> with a love for computer science and
          coding, but what makes it{" "}
          <span className="blueGradientText">
            {" "}
            even more exciting for me is the creative side—{" "}
            <b className="blueGradientText">
              {" "}
              editing, animation, and visual storytelling.
            </b>{" "}
          </span>{" "}
          I’ve always enjoyed drawing and painting, and that creative spark
          naturally pulled me towards animation and design. <br />
          <br /> Now, I’m{" "}
          <span className="blueGradientText">
            eager to bring together my technical skills
          </span>{" "}
          and creative flair{" "}
          <span className="blueGradientText">
            to contribute into real-world projects.
          </span>{" "}
          I’m looking forward to joining an organization where I can apply what
          I’ve learned, grow as a developer, and help turn ideas into impactful
          digital experiences
        </p>
        <img
          src="/selfie.webp"
          alt="profile image"
          loading="lazy"
          className="grayscale sm:h-[34rem] w-[95rem] h-[25rem] rounded-xl object-cover "
        />
        
      </div>
    </div>
  );
};
export default About;
