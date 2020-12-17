import React from "react";
import axios from "axios";
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
    <form
      className="flex flex-col justify-center items-center min-w-full mb-4"
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
  );
};

export default EmailForm;
