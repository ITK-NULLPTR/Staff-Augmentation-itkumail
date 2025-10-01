"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

gsap.registerPlugin(ScrollTrigger);

const AgencySlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate Left → Right (slider)
    gsap.fromTo(
      section,
      { x: -window.innerWidth },
      {
        x: window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          onEnter: () => {
            gsap.to("body", { backgroundColor: "#fff", duration: 1 });
          },
          onEnterBack: () => {
            gsap.to("body", { backgroundColor: "#fff", duration: 1 });
          },
          onLeave: () => {
            gsap.to("body", { backgroundColor: "#000", duration: 1 });
          },
          onLeaveBack: () => {
            gsap.to("body", { backgroundColor: "#000", duration: 1 });
          },
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.set("body", { backgroundColor: "#000" }); // reset to black
    };
  }, []);

  return (
    <section className="agency-slider" ref={sectionRef}>
      {/* Centered Text */}
      <div className="center-content">
        <h2 className="title">GREAT</h2>
      </div>

      {/* Decorative Images */}
      <Image src={star} alt="Star Decoration" className="star" priority />
      <Image src={dotlarge} alt="Dot Decoration" className="dot-large" priority />

      <style jsx>{`
        .agency-slider {
            position: relative;
          height: 60vh;  
          overflow: hidden;
          background: #000;
          display: flex;
          justify-content: center;  
          align-items: flex-end;  
          padding-bottom: 7vh;  
          background: transparent; /* section transparent */
        }

        .center-content {
              display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: clamp(15rem, 8vw, 6rem);
          margin: 0;
          text-align: center;
          font-weight: 900;
          color: #000 !important;
        }

        .star,
        .dot-large {
          position: absolute;
          z-index: 2;
        }

        .star {
          top: 10%;
          left: 5%;
          width: 60px;
          height: auto;
        }

        .dot-large {
          bottom: 10%;
          right: 5%;
          width: 80px;
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default AgencySlider;
