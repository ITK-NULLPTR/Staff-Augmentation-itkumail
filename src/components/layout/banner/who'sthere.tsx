"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section,
      { x: "100vw", opacity: 0.7, scale: 0.95 },
      {
        x: "-100vw",
        opacity: 1,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const circleStyle: React.CSSProperties = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "#f9f4e8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "5.7rem",
    fontWeight: 600,
    color: "#1c1c1c",
    cursor: "pointer",
    position: "relative",
  };

  const hoverFollow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const circle = e.currentTarget;
    const rect = circle.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    gsap.to(circle, {
      x: offsetX * 0.3,
      y: offsetY * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const hoverOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <section
      className="section agency"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", alignItems: "center" }}>
          {/* First row: W, E, (space 50%), A, R, E */}
          <div
            ref={(el) => el && (circlesRef.current[0] = el)}
            style={circleStyle}
            onMouseMove={hoverFollow}
            onMouseLeave={hoverOut}
          >
            W
          </div>
          <div
            ref={(el) => el && (circlesRef.current[1] = el)}
            style={circleStyle}
            onMouseMove={hoverFollow}
            onMouseLeave={hoverOut}
          >
            E
          </div>

          {/* 50% empty space instead of 3rd circle */}
          <div style={{ width: "3%", height: "150px" }}></div>

          <div
            ref={(el) => el && (circlesRef.current[2] = el)}
            style={circleStyle}
            onMouseMove={hoverFollow}
            onMouseLeave={hoverOut}
          >
            A
          </div>
          <div
            ref={(el) => el && (circlesRef.current[3] = el)}
            style={circleStyle}
            onMouseMove={hoverFollow}
            onMouseLeave={hoverOut}
          >
            R
          </div>
          <div
            ref={(el) => el && (circlesRef.current[4] = el)}
            style={circleStyle}
            onMouseMove={hoverFollow}
            onMouseLeave={hoverOut}
          >
            E
          </div>
        </div>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          {["H", "E", "R", "E"].map((letter, i) => (
            <div
              key={i + 5}
              ref={(el) => {
                if (el) circlesRef.current[i + 5] = el;
              }}
              style={circleStyle}
              onMouseMove={hoverFollow}
              onMouseLeave={hoverOut}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agency;
