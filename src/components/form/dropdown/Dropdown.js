import React from "react";
import { useController } from "react-hook-form";

const Dropdown = ({ control, ...props }) => {
  // const { show, setShow, nodeRef } = useClickOutSide();
  // return (
  //   <div className="relative" ref={nodeRef}>
  //     <div
  //       onClick={() => setShow(!show)}
  //       className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-lg cursor-pointer"
  //     >
  //       <span>Select Your Job</span>
  //       <p>a</p>
  //     </div>
  //     <div
  //       className={`absolute left-0 w-full bg-white rounded-lg top-full ${
  //         show ? "" : "opacity-0 invisible"
  //       }`}
  //     >
  //       <div className="p-5">Teacher</div>
  //       <div className="p-5">Developer</div>
  //       <div className="p-5">Doctor</div>
  //     </div>
  //   </div>
  // );
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <div>
      <select
        {...field}
        {...props}
        className="w-full p-3 border border-gray-500 rounded-lg"
      >
        <option value="">--Please choose Your job--</option>
        <option value="developer">Developer</option>
        <option value="teacher">Teacher</option>
        <option value="docter">Docter</option>
      </select>
    </div>
  );
};

export default Dropdown;
