import { useEffect } from "react";
import Meta from "@techwaffle/components/meta";
import { sendScreenViewEvent } from "@techwaffle/utils/ga";
import Link from "next/link";

export default function Custom404() {
  const title = "Page Not Found | Tech Waffle";

  useEffect(() => {
    sendScreenViewEvent({ title });
  }, []);

  return (
    <>
      <Meta
        title={title}
        description="Sorry, we couldn't find the page you were looking for."
      ></Meta>
      <div className="text-center">
        <h1 className="text-8xl font-quicksand-bold my-4">404</h1>
        <h2 className="text-2xl font-quicksand-bold my-4 mb-8">
          Sorry! We couldn't find what you were looking for!
        </h2>
        <Link href="/">
          <a className="underline">Back to Home</a>
        </Link>
      </div>
    </>
  );
}
