import React, { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

function HomePage() {
  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
      const tl = gsap.timeline();

      tl.to("body", {
        overflow: "hidden",
      })
        .to(".preloader .text-container", {
          duration: 0,
          opacity: 1,
          ease: "Power3.easeOut",
        })
        .from(".preloader .text-container h1", {
          duration: 1.5,
          delay: 1,
          y: 120,
          skewY: 10,
          stagger: 0.4,
          ease: "Power3.easeOut",
        })
        .to(".preloader .text-container h1", {
          duration: 1.2,
          y: 120,
          skewY: -20,
          stagger: 0.2,
          ease: "Power3.easeOut",
        })
        .to(".preloader", {
          duration: 1.5,
          height: "0vh",
          ease: "Power3.easeOut",
        })
        .to(
          "body",
          {
            overflow: "auto",
          },
          "-=2"
        )
        .to(".preloader", {
          display: "none",
        });
    },
    { scope: container }
  ); // <-- scope for selector text (optional)

  return (
    <>
      <div ref={container} className="app">
        <div className="preloader fixed top-0 left-0 w-full h-full flex justify-center items-center bg-blackPreloading overflow-hidden z-10">
          <div className="text-container flex flex-row gap-1 overflow-hidden text-white opacity-0">
            <h1 className="text-9xl font-bold">S</h1>
            <h1 className="text-9xl font-bold">O</h1>
            <h1 className="text-9xl font-bold">R</h1>
            <h1 className="text-9xl font-bold">E</h1>
          </div>
        </div>

        <div className="w-full h-screen flex justify-center items-center">
          <h1 className="text-9xl font-bold">Welcome</h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;
