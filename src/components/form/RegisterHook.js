import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Dropdown from "./dropdown/Dropdown";
import InputHook from "./input/InputHook";
import RadioHook from "./radio/RadioHook";
import axios from "axios";
import CheckboxHook from "./checkbox/CheckboxHook";

const schema = yup.object({
  username: yup
    .string()
    .required("Please enter your username")
    .max(10, "MUST BE 10 CHARACTERS OR LESS"),
  email: yup.string().email().required("Please enter your email address"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "your password must have at least 8 characters, 1 uppercase, 1 lowercase, 1 special character",
      }
    )
    .required("Please enter your password"),
  gender: yup
    .string()
    .required("Please Choose your gender")
    .oneOf(["male", "female"], "You can only select male or female"),
  job: yup.string().required("Please Choose your job"),
  term: yup.boolean().required(),
});

const RegisterHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmitHandler = async (a) => {
    if (!isValid) return;
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=1&&limit=8`
    );
    console.log(a);
    reset({
      username: "",
      password: "",
      email: "",
      gender: "",
      job: "",
      term: false,
    });
    return response;
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          UserName
        </label>
        <InputHook
          name="username"
          placeholder="Enter your username"
          id="username"
          type="text"
          control={control}
        ></InputHook>
        {errors.username && (
          <div className="text-sm text-red-500">{errors.username.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          name="email"
          placeholder="Enter your email"
          id="email"
          type="email"
          control={control}
        ></InputHook>
        {errors.email && (
          <div className="text-sm text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="Enter your password"
          id="password"
          type="text"
          // type="password"
          control={control}
        ></InputHook>
        {errors.password && (
          <div className="text-sm text-red-500">{errors.password.message}</div>
        )}{" "}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-3 ">
          <div className="flex items-center gap-x-3">
            <RadioHook
              name="gender"
              type="radio"
              value="male"
              className="w-5 h-5"
              control={control}
            ></RadioHook>
            <span>Male</span>
            {/* <div className="text-sm text-red-500">Please enter your userName</div> */}
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              name="gender"
              value="female"
              control={control}
            ></RadioHook>
            <span>Female</span>
            {/* <div className="text-sm text-red-500">Please enter your userName</div> */}
          </div>
        </div>
        {errors.gender && (
          <div className="text-sm text-red-500">{errors.gender.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Job</label>
        <Dropdown control={control} name="job"></Dropdown>
        {errors.job && (
          <div className="text-sm text-red-500">{errors.job.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <div className="flex items-center gap-x-3">
          <CheckboxHook name="term" control={control}></CheckboxHook>
          <span>I accept the term and condition.</span>
        </div>
        {errors.term && (
          <div className="text-sm text-red-500">{errors.term.message}</div>
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

export default RegisterHook;
