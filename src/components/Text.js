import React from "react";
import useHover from "../hooks/useHover";

const Text = () => {
  const { hovered, nodeRef } = useHover();
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        accusantium, earum tenetur hic sunt nisi provident soluta modi odio
        debitis, accusamus nesciunt inventore porro doloribus quaerat ea officia
        quis incidunt necessitatibus corrupti ipsum. Eius consequatur doloremque
        placeat. Voluptatibus eaque temporibus nihil. Nulla pariatur quod ipsa.
        Adipisci odit non assumenda itaque architecto accusamus magnam
        consequuntur blanditiis recusandae, minima illo debitis perspiciatis
        dolore delectus cum ut. Vero id quisquam repellat odit dolore.
        Temporibus quae sed, minima necessitatibus saepe voluptatum eveniet, eum
        quaerat error illo illum dolor consequatur blanditiis inventore debitis
        esse nisi perferendis optio placeat sapiente omnis ut! Ducimus numquam
        et iure.
      </p>
      <a
        href="https://www.google.com/"
        className={`underline  ${hovered ? "text-green-400" : ""}`}
        ref={nodeRef}
      >
        gg
      </a>
    </div>
  );
};

export default Text;
