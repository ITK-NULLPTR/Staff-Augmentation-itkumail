'use client'
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
    // Check if mobile
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    // text sections animation
    sections.forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: 1.5,
        },
      });
      tl.fromTo(
        section,
        { opacity: 0, y: isMobile ? 80 : 150, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }
      );
    });
    const container = containerRef.current;
    const logoEl = logoRef.current;
    if (container && logoEl) {
      const logoAnimations = isMobile
        ? {
            start: {
              opacity: 1,
              xPercent: -50,
              yPercent: -200,
              top: "45%",
              scale: 1.2,
              left: "50%",
              rotateY: 0,
              rotateX: 5,
              rotateZ: -5,
            },
            end: {
              opacity: 1,
              top: "96%",
              left: "50%",
              xPercent: -50,
              yPercent: -100,
              scale: 1.8,
              rotateY: 15,
              rotateX: 15,
              rotateZ: -12,
            },
          }
        : isTablet
        ? {
            start: {
              opacity: 1,
              xPercent: -50,
              yPercent: -200,
              top: "46%",
              scale: 1.5,
              left: "52%",
              rotateY: 0,
              rotateX: 8,
              rotateZ: -8,
            },
            end: {
              opacity: 1,
              top: "96%",
              left: "75%",
              xPercent: -100,
              yPercent: -100,
              scale: 2.5,
              rotateY: 18,
              rotateX: 18,
              rotateZ: -15,
            },
          }
        : {
            start: {
              opacity: 1,
              xPercent: -50,
              yPercent: -200,
              top: "47%",
              scale: 2,
              left: "55%",
              rotateY: 0,
              rotateX: 10,
              rotateZ: -10,
            },
            end: {
              opacity: 1,
              top: "98%",
              left: "82%",
              xPercent: -100,
              yPercent: -100,
              scale: 3.5,
              rotateY: 21,
              rotateX: 21,
              rotateZ: -19,
            },
          };
      gsap.fromTo(logoEl, logoAnimations.start, {
        ...logoAnimations.end,
        ease: "slow(0.7, 0.7, false)",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    }
    const circlePositions = isMobile
      ? [
          { start: { top: "0%", left: "10%" }, end: { top: "65%", left: "12%" } },
          { start: { top: "5%", left: "40%" }, end: { top: "72%", left: "15%" } },
          { start: { top: "2%", left: "60%" }, end: { top: "67%", left: "55%" } },
          { start: { top: "-2%", left: "40%" }, end: { top: "74%", left: "55%" } },
        ]
      : isTablet
      ? [
          { start: { top: "3%", left: "35%" }, end: { top: "67%", left: "75%" } },
          { start: { top: "10%", left: "65%" }, end: { top: "78%", left: "45%" } },
          { start: { top: "0%", left: "72%" }, end: { top: "66%", left: "55%" } },
          { start: { top: "14%", left: "48%" }, end: { top: "72%", left: "62%" } },
        ]
      : [
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
          scale: isMobile ? 0.5 : isTablet ? 0.7 : 0.9,
        },
        {
          opacity: 1,
          top: pos.end.top,
          left: pos.end.left,
          scale: isMobile ? 0.5 : isTablet ? 0.7 : 0.9,
          ease: "slow(0.9, 0.9, false)",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const getCircleSizes = () => {
    if (typeof window === "undefined") return [210, 210, 210, 210];
    const width = window.innerWidth;
    if (width < 768) return [120, 120, 120, 120]; 
    if (width < 1024) return [160, 160, 160, 160];
    return [210, 210, 210, 210]; 
  };
  const circleSizes = getCircleSizes();
  const circleImages = [circle1, circle2, circle3, circle4];
  return (
    <div className="agency-container" ref={containerRef}>
      <div className="logo-wrapper" ref={logoRef}>
        <Image src={logo} alt="Logo" width={500} priority />
      </div>
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
          <h2 className="title">You feel the<br/> pressure</h2>
          <p>
            In both cases, you only pay the balance <br className="desktop-br" />
            when we find the ideal talent.
          </p>
        </div>
      </section>
      <section className="agency-section">
        <div className="text-block">
          <h2 className="title">The deadlines<br /> tighten.</h2>
          <p>Simple, flexible, and aligned with your goals.</p>
        </div>
      </section>
      <section className="agency-section">
        <div className="text-block">
          <h2 className="title">The ideas are<br /> there,</h2>
          <p>But the hands to build them are stretched thin.</p>
        </div>
      </section>
      <section className="agency-section">
        <div className="text-block">
          <h2 className="title">But resources<br /> feel limited</h2>
          <p>Simple, flexible, and aligned with your goals.</p>
        </div>
      </section>
      <style jsx>{`
        .agency-container {
          position: relative;
          padding: 40px 20px;
          width: 100%;
          overflow: hidden;
          min-height: 100vh;
        }
        .logo-wrapper {
          position: absolute;
          z-index: 0;
          will-change: transform;
          transform-style: preserve-3d;
          pointer-events: none;
        }
        .logo-wrapper img {
          width: 100%;
          height: auto;
          max-width: 300px;
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
        .orb-footer {
          transform-style: preserve-3d;
          position: absolute;
        }
        .agency-section {
          height: 30vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          z-index: 1;
          padding:  0;
        }
        .text-block {
          width: 100%;
          margin-left: 0;
          padding: 0 20px;
        }
        .title {
          font-size: clamp(1.75rem, 5vw, 5rem);
          font-weight: 900;
          margin-bottom: 1rem;
          line-height: 1.2;
          word-break: break-word;
        }
        p {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.6;
          color: #ffffff;
          max-width: 100%;
        }
        .desktop-br {
          display: none;
        }
        /* Tablet styles */
        @media (min-width: 768px) {
          .agency-container {
            padding: 60px 40px;
          }
          .logo-wrapper img {
            max-width: 400px;
          }
          .agency-section {
            height: 50vh;
          }
          .text-block {
            width: 70%;
            padding: 0 30px;
          }
          .desktop-br {
            display: inline;
          }
        }
        /* Desktop styles */
        @media (min-width: 1024px) {
          .agency-container {
            padding: 100px;
          }
          .logo-wrapper img {
            max-width: 500px;
          }
          .agency-section {
            height: 45vh;
          }
          .text-block {
            width: 50%;
            padding: 0;
          }
          p {
            max-width: 90%;
          }
        }
        /* Large desktop */
        @media (min-width: 1440px) {
          .agency-container {
            padding: 120px 150px;
          }
          .text-block {
            width: 45%;
          }
        }
        /* Small mobile */
        @media (max-width: 480px) {
          .agency-container {
            padding: 30px 15px;
          }
          .agency-section {
            height: 45vh;
          }
          .text-block {
            padding: 0 10px;
          }
          .title {
            font-size: clamp(1.5rem, 8vw, 2.5rem);
          }
        }
      `}</style>
    </div>
  );
};
export default Agency;