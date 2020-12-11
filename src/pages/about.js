import React from "react";
import Social from "../components/about/Social";
import { twitterIcon } from "../components/social/Twitter";

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
    <div className="flex flex-col items-center min-w-full"></div>
    <p className="mb-4">Follow me on twitter for updates</p>
    <Social
      href="https://twitter.com/techwaffler"
      icon={twitterIcon}
      handle="@techwaffler"
    ></Social>
  </div>
);

export const getStaticProps = async () => ({
  props: {
    title: "About Me - Tech Waffle",
    description: `I'm a software developer looking to help people where I can. I am primarily focused on web development but I am interested in other areas too. This blog will be a place for me to document my learning.`,
  },
});

export default About;
