import React from "react";
import CardContainer from "./cardContainer";
import {getRandomQuote} from '../app/actions/getRandomQuote'
import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";



const RandomQuote = async () => {
  const randomQuote = await getRandomQuote();

  return (
    <CardContainer className="font-poppins text-4xl font-extralight flex-col bg-text/40 text-background">
      <div className="flex justify-between w-full">
        <p className="font-danfo text-text tracking-wider">
          Have a <span className="text-accent"> Nice Quote </span>
        </p>
        <Link href='/first?isPopupOpen=false'><CloseOutlined/></Link>
      </div>
      <div className="flex flex-col justify-around items-end h-full">
        <p>{randomQuote.quote.body}</p>
        <p className="italic">-{randomQuote.quote.author}</p>
      </div>
    </CardContainer>
  );
};

export default RandomQuote;
