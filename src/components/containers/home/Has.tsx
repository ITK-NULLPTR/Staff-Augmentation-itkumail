"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
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
      {
        opacity: 0,
        x: 100,
        y: 200,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "power3.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="agency"
      ref={sectionRef}
    >
      <div className="center-content">
        <h2 className="title">
          <strong>HAS</strong>
        </h2>
      </div>

      <Image src={star} alt="Star Decoration" className="star" priority />
      <Image src={dotlarge} alt="Dot Decoration" className="dot-large" priority />

      <style jsx>{`
        .agency {
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .center-content {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          text-align: center;
        }

        .title {
          font-size: clamp(3rem, 12vw, 15rem); /* responsive font */
          font-weight: 900;
          margin: 0;
          line-height: 1;
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

export default Agency;
