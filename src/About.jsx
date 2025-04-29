import { NavbarComp } from "./Home";

/* eslint-disable react/prop-types */
const About = () => {
  return (
    <div className="p-4 mt-20">
      <NavbarComp />
      <AboutMeComp />
      <h1>Education</h1>
      <h3>Post Graduate</h3>
      <p> <b>Masters of Computer Application (MCA)</b> - [ 2022-24 ]
       <br /><i>Orissa University of Agriculture and Technology (OUAT), Bhubaneswar</i></p>
      <h3>Graduation</h3>
      <p><b>B.Sc Computer Science</b> - (2019-22) <br /> <i>Pragati Degree College, Bhawanipatna </i> </p>
      <h1>Hobbies</h1>
      <p>Drawing Doodles, playing chess, interest in playing piano</p>
    </div>
  );
};
export const AboutMeComp = ({ height }) => {
  return (
    <div className={`overflow-hidden relative ${height}? "mt-20" : "mt-0"`}>
  <h1>About Me</h1>
  <div className="bg-blue-900/40 overflow-hidden rounded-xl flex flex-col-reverse sm:flex-col md:flex-row gap-5">
    
    {/* TEXT SECTION */}
    <div className={`flex-1 p-6 backdrop-blur-lg rounded-xl text-2xl font-light ${height ? "max-h-[30rem] overflow-hidden" : "h-fit"} text-wrap `}>
      <b className="blueGradientText text-4xl">Hi, I’m Girish!</b> an
      aspiring software developer with a{" "}
      <b className="blueGradientText">deep interest in web development</b> and its related technologies.
      <br /><br />
      Though I don’t come from a formal background in web design or development, I’ve been
      <span className="blueGradientText"> passionately learning and building projects</span> in this field for over two years.
      <br /><br />
      My journey into tech began with a love for computer science and coding, but what makes it 
      <span className="blueGradientText"> even more exciting for me is the creative side— 
        <b className="blueGradientText"> editing, animation, and visual storytelling.</b>
      </span>
      <br /><br />
      I’ve always enjoyed drawing and painting, and that creative spark naturally pulled me towards animation and design.
      <br /><br />
      Now, I’m <span className="blueGradientText">eager to bring together my technical skills</span> and creative flair 
      <span className="blueGradientText">to contribute to real-world projects.</span> 
      I’m looking forward to joining an organization where I can apply what I’ve learned, grow as a developer, and help turn ideas into impactful digital experiences.
    </div>

    {/* IMAGE SECTION */}
    <div className="flex-shrink-2 md:w-1/3 w-full sm:max-h-[30rem] md:h-full ">
      <img
        src="/selfie.webp"
        alt="profile image"
        loading="lazy"
        className={`grayscale rounded-xl w-full object-cover sm:object-[25%_37%] ${height ? "sm:max-h-[30rem]" : "h-full"} `}
      />
    </div>
  </div>
</div>

  );
};
export default About;
