import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-lg border border-gray-300 bg-white outline-none transition-all focus:border-green-500 "
      {...field}
      {...props}
    ></input>
  );
};

export default InputHook;
