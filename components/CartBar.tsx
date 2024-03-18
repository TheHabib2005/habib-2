"use client";
import React from "react";
interface Props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartBar = ({ isOpen, setOpen }: Props) => {
  return (
    <div
      className={`fixed z-20 bg-black  w-[300px] h-screen  top-0 ${
        isOpen ? "right-0" : "right-[-100%]"
      } text-white`}
    >
      <button className="text-white m-5" onClick={() => setOpen(false)}>
        close
      </button>
    </div>
  );
};

export default CartBar;
