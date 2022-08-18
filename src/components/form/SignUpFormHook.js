/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
  firstName: yup.string().required().max(10, "MUST BE 10 CHARACTERS OR LESS"),
});

const SignUpFormHook = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=1&&limit=8`
    );
    // reset({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    // });
    const data = getValues(["firstName", "lastName", "email"]);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: SignUpFormHook.js ~ line 32 ~ onSubmit ~ data",
      data
    );
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    return response.data;
  };

  const watchShowAge = watch("showAge", false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 border border-gray-100 rounded-md"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {errors.firstName && (
          <div className="text-sm text-red-500">
            {errors.firstName?.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your first name"
          className="p-4 border border-gray-100 rounded-md"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          className="p-4 border border-gray-100 rounded-md"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input
            type="number"
            name=""
            id=""
            placeholder="Please enter your age"
          />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 font-semibold text-white bg-blue-600 rounded-lg"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
