import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
// box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
const CardContainer = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`w-full h-full border border-text p-7 flex items-center justify-center rounded-lg bg-text/2 backdrop-blur-md shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
