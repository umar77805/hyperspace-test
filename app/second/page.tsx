import CardContainer from "@/components/cardContainer";
import Link from "next/link";
import React from "react";

const Second = () => {
  return (
    <div className="absolute w-4/5 h-4/5 p-4">
      <CardContainer className="font-sans text-7xl font-thin mb-5 flex-col bg-text/30 text-background">
        <div className="flex flex-col justify-around items-end h-full">
          <p>
            Thank you for giving me an opprtunity. Although it is far from
            perfect, hope you liked the end result.
          </p>
          <p className="italic">-Mohammad Umar</p>
        </div>
      </CardContainer>
      <div className="w-full h-auto flex justify-around">
        <Link href="/first" className="w-2/5 h-auto">
          <CardContainer>First Page</CardContainer>
        </Link>
        <Link href="/second" className="w-2/5 h-auto">
          <CardContainer>Second Page</CardContainer>
        </Link>
      </div>
    </div>
  );
};

export default Second;
