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
  const wordsRef = useRef<HTMLHeadingElement[]>([]);
  const words = ["HAS", "AN", "UNSEEN", "HAND"];
  useEffect(() => {
    const section = sectionRef.current;
    const isMobile = window.innerWidth < 768;
    if (!section) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=700%",
        scrub: true,
        pin: true,
      },
    });
    const positions = isMobile
      ? [
          { x: -160, y: 150 },
          { x: -80, y: 150 },
          { x: 30, y: 150 },
          { x: 150, y: 150 },
        ]
      : [
          { x: -500, y: 200 },
          { x: -300, y: 200 },
          { x: 20, y: 200 },
          { x: 400, y: 200 },
        ];
    wordsRef.current.forEach((word, i) => {
      tl.fromTo(
        word,
        { opacity: 0, y: 200, scale: 1.2 },
        { opacity: 1, y: 0, x: 0, scale: 1, duration: 2, ease: "power3.out" },
        i * 2
      );
      tl.to(
        word,
        {
          x: positions[i].x,
          y: positions[i].y,
          scale: 0.6,
          opacity: 0.9,
          duration: 2,
          ease: "power3.inOut",
        },
        (i + 1) * 2
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="agency" ref={sectionRef}>
      <div className="center-content">
        {words.map((text, i) => (
          <h2
            key={i}
            className="title"
            ref={(el) => {
              if (el) wordsRef.current[i] = el;
            }}
          >
            <strong>{text}</strong>
          </h2>
        ))}
      </div>
      <Image src={star} alt="Star Decoration" className="star" priority />
      <Image
        src={dotlarge}
        alt="Dot Decoration"
        className="dot-large"
        priority
      />
      <style jsx>{`
        .agency {
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        .center-content {
          position: relative;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .title {
          position: absolute;
          font-size: clamp(3rem, 10vw, 12rem);
          font-weight: 900;
          margin: 0;
          line-height: 1;
          opacity: 0;
          white-space: nowrap;
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
        @media (max-width: 768px) {
          .agency {
            height: 80vh; 
            width: 100%;
          }
          .title {
            font-size: clamp(2rem, 12vw, 4rem);
          }
          .star {
            width: 40px;
            top: 5%;
            left: 4%;
          }
          .dot-large {
            width: 50px;
            bottom: 5%;
            right: 4%;
          }
        }
      `}</style>
    </section>
  );
};
export default Agency;
