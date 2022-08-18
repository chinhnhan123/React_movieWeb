import React from "react";
export default function useHover() {
  const [hovered, setHovered] = React.useState(false);
  const nodeRef = React.useRef(null);
  React.useEffect(() => {
    function handleMouseOver() {
      console.log("Mouse Over");
      setHovered(true);
    }
    function handleMouseOut() {
      console.log("Mouse Out");
      setHovered(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      dom.removeEventListener("mouseover", handleMouseOver);
      dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
}
