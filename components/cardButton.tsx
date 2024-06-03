"use client";
import { ReactNode } from "react";
import CardContainer from "./cardContainer";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const CardButton = ({ children, onClick }: Props) => {
  return (
    <>
      <div
        onClick={onClick}
        className="w-full h-full flex justify-center items-center"
      >
        <CardContainer>{children}</CardContainer>
      </div>
    </>
  );
};

export default CardButton;
