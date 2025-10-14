"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// apna logo import karo
import logo from "public/images/24.png"; 
import circle1 from "public/images/circle1.png";
import circle2 from "public/images/circle2.png";
import circle3 from "public/images/circle3.png";
import circle4 from "public/images/circle4.png";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".agency-section");
    if (!sections.length) return;

    // text sections animation
    sections.forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });

      tl.fromTo(
        section,
        { opacity: 0, y: 150, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }
      );
    });
     // logo animation
    const container = containerRef.current;
    const logoEl = logoRef.current;
    if (container && logoEl) {
      gsap.fromTo(
        logoEl,
        {
          opacity: 1,
          xPercent: -50,
          yPercent: -200,
          top: "47%",
          scale: 2.3,
          left: "55%",
          rotateY: 0,
          rotateX: 10,
          rotateZ: -10,
        },
        {
          opacity: 1,
          top: "98%",
          left: "82%",
          xPercent: -100,
          yPercent: -100,
          scale: 3.5,
          rotateY: 21,
          rotateX: 21,
          rotateZ: -19,
          ease: "slow(0.7, 0.7, false)",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }

    // independent circles animation
    const circlePositions = [
      { start: { top: "2%", left: "45%" }, end: { top: "69%", left: "79%" } },
      { start: { top: "8%", left: "69%" }, end: { top: "80%", left: "50%" } },
      { start: { top: "-2%", left: "75%" }, end: { top: "68%", left: "53%" } },
      { start: { top: "13%", left: "53%" }, end: { top: "74%", left: "65%" } },
    ];

    circlesRef.current.forEach((circle, i) => {
      const pos = circlePositions[i % circlePositions.length];
      gsap.fromTo(
        circle,
        {
          opacity: 1,
          top: pos.start.top,
          left: pos.start.left,
          scale: 0.9,
        },
        {
          opacity: 1,
          top: pos.end.top,
          left: pos.end.left,
          scale: 0.9,
          ease: "slow(0.7, 0.7, false)",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // different circle sizes
  const circleSizes = [210, 210, 210, 210];
  const circleImages = [circle1, circle2, circle3, circle4];

  return (
    <div className="agency-container" ref={containerRef}>
      {/* Logo inside background */}
      <div className="logo-wrapper" ref={logoRef}>
        <Image src={logo} alt="Logo" width={500} priority />
      </div>

      {/* Circles with Images */}
      {circleImages.map((img, i) => (
        <div
          key={i}
          className="circle-box orb-footer"
          style={{
            width: `${circleSizes[i]}px`,
            height: `${circleSizes[i]}px`,
          }}
          ref={(el) => {
            if (el) circlesRef.current[i] = el;
          }}
        >
          <Image
            src={img}
            alt={`circle-${i}`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}

      {/* Sections */}
      <section className="agency-section">
        <div className="text-block">
          <h2 className="title">You feel the<br></br> pressure</h2>
          <p>
            In both cases, you only pay the balance <br></br>when we find the ideal
            talent.
          </p>
        </div>
      </section>

      <section className="agency-section">
        <div className="text-block">
          <h2 className="title">The deadlines<br></br> tighten.</h2>
          <p>Simple, flexible, and aligned with your goals.</p>
        </div>
      </section>

      <section className="agency-section">
        <div className="text-block">
          <h2 className="title">The ideas are<br></br> there,</h2>
          <p>But the hands to build them are stretched thin.</p>
        </div>
      </section>

      <section className="agency-section">
        <div className="text-block">
          <h2 className="title">But resources<br></br> feel limited</h2>
          <p>Simple, flexible, and aligned with your goals.</p>
        </div>
      </section>

      <style jsx>{`
        .agency-container {
          position: relative;
          padding:100px;
          width: 100%;
          overflow: hidden;
        }

        .logo-wrapper {
          position: absolute;
          z-index: 0;
          will-change: transform;
          transform-style: preserve-3d;
          pointer-events: none;
        }

        .circle-box {
          position: absolute;
          z-index: 0;
           overflow: hidden; 
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          will-change: transform;
        }

        /* Orb effect */
        .orb-footer {
          // box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2),
            // 0 5px 15px rgba(0, 0, 0, 0.3);
          transform-style: preserve-3d;
          position: absolute;
        }

        .agency-section {
          height: 45vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          z-index: 1;
        }

        .text-block {
          width: 50%;
          margin-left: 0%;
        }

        .title {
          font-size: clamp(2rem, 6vw, 5rem);
          font-weight: 900;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #ffffff;
          max-width: 90%;
        }
      `}</style>
    </div>
  );
};

export default Agency;
