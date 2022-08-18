import React from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px]" ref={nodeRef}>
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
        <div className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg top-full">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

// const Dropdown = () => {
//   const [dropdown, setDropDown] = React.useState(false);
//   const dropdownRef = React.useRef(null);
//   React.useEffect(() => {
//     function handleDropDown(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropDown(false);
//       }
//     }
//     document.addEventListener("click", handleDropDown);
//     return () => {
//       document.removeEventListener("click", handleDropDown);
//     };
//   });

//   return (
//     <div className="relative w-full max-w-[400px] px-5" ref={dropdownRef}>
//       <div
//         className="w-full p-5 border border-gray-300 rounded-lg cursor-pointer"
//         onClick={() => setDropDown(!dropdown)}
//       >
//         Selected
//       </div>
//       {dropdown && (
//         <div className="absolute w-full p-5 bg-white border border-gray-200 rounded-lg left-5 top-full">
//           <div className="py-3 border-b cursor-pointer border-b-gray-200">
//             React
//           </div>
//           <div className="py-3 border-b cursor-pointer border-b-gray-200">
//             Html
//           </div>
//           <div className="py-3 cursor-pointer"> Css</div>
//         </div>
//       )}
//     </div>
//   );
// };

export default Dropdown;
