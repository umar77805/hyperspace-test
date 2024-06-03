"use client";
import CardButton from "@/components/cardButton";
import CardContainer from "@/components/cardContainer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  isPopupOpen: boolean;
}

const QuoteDisplay = ({ children, isPopupOpen }: Props) => {
  const router = useRouter();

  return (
    <>
      {isPopupOpen ? (
        <div className="w-4/5 h-4/5 absolute">{children}</div>
      ) : (
        <div className="w-4/5 h-auto absolute flex gap-4">
          <div className="w-1/3 h-auto cursor-pointer">
            <CardButton onClick={() => router.push("/first?isPopupOpen=true")}>
              Get a Random Quote
            </CardButton>
          </div>
          <Link href="/second" className="w-1/3 h-auto">
            <CardContainer>Second Page</CardContainer>
          </Link>
          <Link href="/" className="w-1/3 h-auto">
            <CardContainer>Home Page</CardContainer>
          </Link>
        </div>
      )}
    </>
  );
};

export default QuoteDisplay;
