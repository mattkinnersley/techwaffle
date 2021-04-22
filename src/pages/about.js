import { useEffect } from "react";
import Meta from "@techwaffle/components/meta";
import { sendScreenViewEvent } from "@techwaffle/utils/ga";

const About = () => {
  const title = "About Me - Tech Waffle";

  useEffect(() => {
    sendScreenViewEvent({ title });
  }, []);

  return (
    <>
      <Meta
        title={title}
        description="I'm a software developer looking to help people where I can. I am primarily focused on web development but I am interested in other areas too. This blog will be a place for me to document my learning."
      ></Meta>
      <div className="text-center">
        <div>
          <h1 className="text-5xl font-extrabold">About Me</h1>
        </div>
        <div className="flex flex-col my-5 items-center">
          <img className="rounded-full h-52 w-52" src="/images/matt.png"></img>
          <h4 className="my-4 text-3xl">Hi, I'm Matt</h4>
          <p className="mb-4">
            I'm a software developer looking to help people where I can. I am
            primarily focused on web development but I am interested in other
            areas too. This blog will be a place for me to document my learning.
          </p>
          <p>
            If I learn something new that I think could help someone else, I'll
            share it on here. You might also see tutorials on here from time to
            time.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
