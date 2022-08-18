import React from "react";
import { useController } from "react-hook-form";

const CheckboxHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      {...field}
      checked={field.value}
      type="checkbox"
      className="w-5 h-5 mr-2"
    ></input>
  );
};

export default CheckboxHook;
