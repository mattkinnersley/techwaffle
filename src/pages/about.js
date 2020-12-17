import React from "react";

const About = () => (
  <div className="text-center">
    <div>
      <h1 className="text-5xl font-extrabold">About Me</h1>
    </div>
    <div className="flex flex-col my-5">
      <h4 className="mb-4 text-2xl">Hi, I'm Matt Kinnersley</h4>
      <p className="mb-4">
        I'm a software developer looking to help people where I can. I am
        primarily focused on web development but I am interested in other areas
        too. This blog will be a place for me to document my learning.
      </p>
      <p>
        If I learn something new that I think could help someone else, I'll
        share it on here. You might also see tutorials on here from time to
        time.
      </p>
    </div>
  </div>
);

export const getStaticProps = async () => ({
  props: {
    title: "About Me - Tech Waffle",
    description: `I'm a software developer looking to help people where I can. I am primarily focused on web development but I am interested in other areas too. This blog will be a place for me to document my learning.`,
  },
});

export default About;
