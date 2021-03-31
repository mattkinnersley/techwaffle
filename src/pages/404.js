import NavLink from "@techwaffle/components/nav/NavLink";

export default function Custom404() {
  return (
    <div className="text-center">
      <h1 className="text-8xl font-quicksand-bold my-4">404</h1>
      <h2 className="text-2xl font-quicksand-bold my-4 mb-8">
        Sorry! We couldn't find what you were looking for!
      </h2>
      <NavLink href="/">Back to Home</NavLink>
    </div>
  );
}
