const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <div className="rounded-xl h-[60vh] flex flex-col md:flex-row">
        <img src="/new.jpg" alt="profile image" className="h-[25rem] rounded-xl"/>
        <p className="bg-darkBg/40 backdrop-blur-lg rounded-xl p-4 h-full">
          <b>Hi, I’m Girish!</b> an aspiring web developer with a deep interest in
          web development and its related technologies. <br />Though I don’t come from
          a formal background in web design or development. I’ve been
          passionately learning and building projects in this field for over two
          years.
          <br /> My journey into tech began with a love for computer science and
          coding, but what makes it even more exciting for me is the creative
          side—editing, animation, and visual storytelling. I’ve always enjoyed
          drawing and painting, and that creative spark naturally pulled me
          towards animation and design. <br /> Now, I’m eager to bring together my
          technical skills and creative flair to contribute to real-world
          projects. I’m looking forward to joining an organization where I can
          apply what I’ve learned, grow as a developer, and help turn ideas into
          impactful digital experiences
        </p>
      </div>
      <h2>Education</h2>
      <h2>Hobbies</h2>
    </div>
  );
};

export default About;
