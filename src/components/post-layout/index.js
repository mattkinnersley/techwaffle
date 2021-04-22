import React, { useEffect } from "react";
import { sendScreenViewEvent } from "@techwaffle/utils/ga";
import Meta from "../meta";
import moment from "moment";
import Link from "next/link";

const PostLayout = ({ meta: { title, excerpt, date, author }, children }) => {
  useEffect(() => {
    sendScreenViewEvent({ title });
  }, []);

  return (
    <>
      <Meta title={title} description={excerpt}></Meta>
      <article className="flex flex-col">
        <div className="text-center my-4">
          <h1 className="text-5xl font-extrabold">{title}</h1>
          <p className="py-4">
            By{" "}
            <Link href="/about">
              <a className="underline">{author}</a>
            </Link>{" "}
            - {moment(date).format("D MMMM YYYY")}
          </p>
        </div>
        <div className="markdown min-w-full">{children}</div>
      </article>
    </>
  );
};

export default PostLayout;
