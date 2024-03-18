import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HomePage() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(".loading-animation", {
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
          ".loading-animation",
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
  );

  return (
    <>
      <div ref={container}>
        <div className="loading-animation">
          <div className="preloader fixed top-0 left-0 w-full h-full flex justify-center items-center bg-blackPreloading overflow-hidden z-10">
            <div className="text-container flex flex-row overflow-hidden gap-[2px] text-white opacity-0">
              <h1 className="text-3xl lg:text-8xl">S</h1>
              <h1 className="text-3xl lg:text-8xl">O</h1>
              <h1 className="text-3xl lg:text-8xl">R</h1>
              <h1 className="text-3xl lg:text-8xl">E</h1>
            </div>
          </div>

          <div className="w-full h-screen flex justify-center items-center overflow-hidden">
            <h1 className="text-3xl lg:text-5xl text-blackPreloading">
              Welcome
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
