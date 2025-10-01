"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExpandingCircle = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    gsap.fromTo(
      circleRef.current,
      { scale: 0, y: 200 },  
      {
        scale: 30,           
        y: 0,
        ease: "power2.out",  
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 95%",     
          end: "top 0%",     
           scrub: 3.5,         
        },
      }
    );
  }, []);

  return (
    <div className="circle-container">
      <div className="circle" ref={circleRef}></div>

      <style jsx>{`
        .circle-container {
          height: 60vh;  
          background: white;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .circle {
          width: 15vw;
          height: 15vw;
          border-radius: 50%;
          background: black;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default ExpandingCircle;
