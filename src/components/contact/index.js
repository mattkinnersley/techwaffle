import Button from "../button";
import Mail from "../svg/Mail";
import Twitter from "../svg/Twitter";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <h3 className="text-2xl mt-2 mb-2 font-quicksand-bold">Get in touch</h3>
      <div className="flex min-w-full justify-around">
        <Button
          href="https://www.twitter.com/mattkinnersley_"
          aria-label="Go to twitter"
        >
          <Twitter />
        </Button>
        <Button href="mailto:hello@mattkinnersley.com" aria-label="Send me an email">
          <Mail />
        </Button>
      </div>
    </div>
  );
};

export default Contact;
