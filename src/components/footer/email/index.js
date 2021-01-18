import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { sendSignUpEvent } from "../../../utils/ga";

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
        sendSignUpEvent({ method: "Mailchimp" });
      }
    } catch (error) {
      console.log(error);
      setError("email", { type: "api", message: error.response.data.message });
    }
  };
  const { isSubmitting, isSubmitSuccessful, isDirty } = formState;

  const formValid = isDirty && !errors.email;

  return (
    <form
      className="flex flex-col justify-center items-center min-w-full mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center mb-4 min-w-full">
        <input
          className={`min-w-full rounded-md border-2 border-gray-800 dark:bg-gray-600 p-2 focus:outline-none ${cn(
            {
              "border-red-600": errors.email,
            }
          )}`}
          type="text"
          placeholder="you@email.com"
          name="email"
          ref={register({
            required: true,
            pattern: /^\S+@\S+\.\S+$/i,
          })}
        />
      </div>

      <input
        className={`transition-borderShadow duration-300 rounded-md border-2 mb-2 border-gray-800 p-2 bg-white dark:bg-gray-600 min-w-full font-quicksand-bold focus:outline-none active:shadow-inner disabled:opacity-25 ${cn(
          {
            "cursor-pointer thumbnail-shadow dark:border-yellow-50": formValid,
            "cursor-not-allowed": !formValid,
          }
        )}`}
        name="submit"
        value={isSubmitting ? "..." : "Submit"}
        disabled={!formValid}
        type="submit"
      />
      {errors.email && <span>{getErrorMessage(errors)}</span>}
      {isSubmitSuccessful && !errors.email && (
        <span>Thanks for subscribing!</span>
      )}
    </form>
  );
};

export default EmailForm;
