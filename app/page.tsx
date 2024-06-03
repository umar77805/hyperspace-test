import CardButton from "@/components/cardButton";
import CardContainer from "@/components/cardContainer";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-3/5 h-auto absolute flex gap-4">
        <Link href="/first" className="w-1/2 h-auto">
          <CardContainer>First Page</CardContainer>
        </Link>
        <Link href="/second" className="w-1/2 h-auto">
          <CardContainer>Second Page</CardContainer>
        </Link>
      </div>
    </>
  );
};

export default Home;
