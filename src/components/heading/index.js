import Logo from "./Logo";
import Subtitle from "./Subtitle";

const Heading = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-center mb-5">
        <Logo size="128"></Logo>
        <h1 className="text-waffle logo-shadow font-lemon text-6xl tracking-wide leading-none">
          Tech Waffle
        </h1>
      </div>

      <Subtitle></Subtitle>
    </div>
  );
};

export default Heading;
