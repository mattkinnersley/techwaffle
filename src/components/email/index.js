import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const EmailForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("/api/mailchimp", data);
  };

  return (
    <footer className="flex flex-col justify-center items-center pb-16 pt-5 min-w-full bg-waffleLight">
      <h3 className="text-2xl mt-4 font-quicksand-bold">
        Want to stay updated?
      </h3>
      <p className="mb-4">I'll let you know when I upload a new article.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="rounded-md border-2 border-gray-800 p-2 mr-4 focus:outline-none"
          type="text"
          placeholder="you@email.com"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />

        <input
          className="rounded-md border-2 border-gray-800 p-2 bg-white font-quicksand-bold duration-300 thumbnail-shadow transition cursor-pointer focus:outline-none active:shadow-inner"
          type="submit"
        />
      </form>
    </footer>
  );
};

export default EmailForm;
