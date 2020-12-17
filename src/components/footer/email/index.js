import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const getErrorMessage = ({ email }) => {
  let message = "";
  if (email) {
    switch (email?.type) {
      case "required":
        message = "Please enter an email address";
        break;
      case "pattern":
        message = "Please enter a valid email address";
        break;
      case "api":
        message = email.message;
        break;
      default:
        message = "";
        break;
    }
  }

  return message;
};

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState,
  } = useForm();
  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post("/api/mailchimp", formData);
      if (data?.status === "subscribed") {
        reset();
      }
    } catch (error) {
      console.log(error);
      setError("email", { type: "api", message: error.response.data.message });
    }
  };
  const { isSubmitting, isSubmitSuccessful } = formState;
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
        {errors && <span>{getErrorMessage(errors)}</span>}
        {isSubmitSuccessful && !errors.email && (
          <span>Thanks for subscribing!</span>
        )}
      </div>

      <input
        className="rounded-md border-2 border-gray-800 p-2 bg-white min-w-full font-quicksand-bold duration-300 thumbnail-shadow transition cursor-pointer focus:outline-none active:shadow-inner"
        name="submit"
        value={isSubmitting ? "..." : "Submit"}
        disabled={isSubmitting}
        type="submit"
      />
    </form>
  );
};

export default EmailForm;
