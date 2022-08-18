import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return <input {...field} {...props} type="radio" className="w-5 h-5"></input>;
};

export default RadioHook;
