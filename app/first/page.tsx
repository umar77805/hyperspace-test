import RandomQuote from "@/components/randomQuote";
import QuoteDisplay from "@/components/quoteDisplay";

interface Props {
  searchParams: {isPopupOpen: string}
}

export default function FirstPage({searchParams: {isPopupOpen}}: Props) {
  const isOpen = (isPopupOpen === 'true');
  return (
    <>
        {isOpen ? <div className="w-screen h-screen backdrop-blur-md absolute"></div> : null}
        <QuoteDisplay isPopupOpen={isOpen}>
          <RandomQuote />
        </QuoteDisplay>
    </>
  );
}
