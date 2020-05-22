import React from "react";
import Link from "next/link";

import moment from "moment";

const HeroPost = ({ post: { title, slug, date, excerpt } }) => {
  return (
    <div className="mb-16 min-h-48">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          <div className="transition duration-300 ease-in-out border-2 border-black flex flex-col md:flex-row p-4 thumbnail-shadow h-full overflow-hidden">
            <div className="border-black flex flex-auto items-center justify-between mb-4 md:border-r-2 md:flex-col md:mb-0 md:pr-4 md:w-4/12">
              <h3 className="font-quicksand-bold md:mb-4 pr-8 md:pr-0 text-xl md:text-center">
                {title}
              </h3>
              <span className="text-center">
                {moment(date).format("D MMMM")}
              </span>
            </div>
            <div className="flex flex-auto items-center leading-loose md:pl-4 md:w-8/12">
              <p>{excerpt}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default HeroPost;
