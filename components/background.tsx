"use client";
import { usePathname } from "next/navigation";

const Background = () => {
  const pathName = usePathname();
  return (
    <div className="relative w-full h-screen">
      {pathName === "/" ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-primary animate-moveCircleBeforeMain circleBefore" />
          <div className="absolute top-0 left-0 w-full h-full bg-primary animate-moveCircleAfterMain circleAfter" />
        </>
      ) : pathName === "/first" ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-primary animate-moveCircleBeforeFirst circleBefore" />
          <div className="absolute top-0 left-0 w-full h-full bg-accent animate-moveCircleAfterFirst circleAfter" />
        </>
      ) : pathName === "/second" ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-primary animate-moveCircleBeforeSecond transition-all circleBefore" />
          <div className="absolute top-0 left-0 w-full h-full bg-secondary animate-moveCircleAfterSecond circleAfter" />
          <div className="absolute top-0 left-0 w-full h-full bg-text animate-moveCircleBeforeMain transition-all newCircleBefore" />
          <div className="absolute top-0 left-0 w-full h-full bg-accent animate-moveCircleAfterMain newCircleAfter" />
        </>
      ) : null}
    </div>
  );
};

export default Background;
