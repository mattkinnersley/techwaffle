import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const EmailForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios.post("/api/mailchimp", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <footer className="flex flex-col justify-center items-center pb-16 pt-5 min-w-full bg-waffleLight">
      <div className="flex flex-col justify-center items-center sm:w-8/12 lg:w-6/12 xl:w-4/12">
        <h3 className="text-2xl mt-4 font-quicksand-bold">
          Want to stay updated?
        </h3>
        <p className="mb-4">I'll let you know when I upload a new article.</p>
        <form
          className="flex flex-col justify-center items-center min-w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center mb-4 min-w-full">
            <input
              className="min-w-full rounded-md border-2 border-gray-800 p-2 focus:outline-none"
              type="text"
              placeholder="you@email.com"
              name="email"
              ref={register({
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g,
              })}
            />
            {errors.email && <span>Please enter a valid email address</span>}
          </div>

          <input
            className="rounded-md border-2 border-gray-800 p-2 bg-white min-w-full font-quicksand-bold duration-300 thumbnail-shadow transition cursor-pointer focus:outline-none active:shadow-inner"
            type="submit"
          />
        </form>
      </div>
    </footer>
  );
};

export default EmailForm;
