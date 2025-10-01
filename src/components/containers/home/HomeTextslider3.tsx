"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

gsap.registerPlugin(ScrollTrigger);

const HomeTextslider3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      section,
      { x: window.innerWidth },
      { x: -window.innerWidth, ease: "none" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="agency-section" ref={sectionRef}>
      {/* Centered Text */}
      <div className="center-content">
        <h2 className="title">ENTERPRISE</h2>
      </div>

      {/* Decorative Images */}
      <Image src={star} alt="Star Decoration" className="star" priority />
      <Image src={dotlarge} alt="Dot Decoration" className="dot-large" priority />

      <style jsx>{`
        .agency-section {
            position: relative;
          height: 60vh;  
          overflow: hidden;
          // background: #000;
          display: flex;
          justify-content: center;  
          align-items: flex-end;  
          padding-bottom: 7vh;  
        }

        .center-content {
            display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: clamp(15rem, 8vw, 5rem);
          color: #fff;
          margin: 0;
          text-align: center;
          font-weight: 900;
        }

        /* Decorative images fix */
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

export default HomeTextslider3;
