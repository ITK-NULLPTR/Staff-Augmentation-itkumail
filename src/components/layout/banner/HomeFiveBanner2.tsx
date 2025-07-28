"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NiceAndEasySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    // Scroll animation (right-to-left)
    gsap.fromTo(
      sectionRef.current,
      { x: "100vw", opacity: 1, scale: 0.95 }, // Right
      {
        x: "-110vw", // To Left
        opacity: 1,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.3,
          pin: true,
        },
      }
    );

    // Floating image animations
    gsap.fromTo(
      ".img-big",
      { y: 0, scale: 1 },
      {
        y: -30,
        scale: 1.05,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

    gsap.to(".img1", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });

    gsap.fromTo(
      ".img2",
      { x: -10 },
      {
        x: 10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      }
    );

    gsap.from(".img3", {
      opacity: 0,
      y: 50,
      duration: 2,
      delay: 1,
      ease: "power3.out",
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
          maxWidth: "1200px",
        }}
      >
        {/* Left Side - Main Text and Floating Cards */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              background: "linear-gradient(to right, #00ff66, #b6ffbb)",
              color: "#000000 !important",
              padding: "20px 30px",
              fontSize: "54px",
              fontWeight: "900",
              borderRadius: "12px",
              zIndex: 1,
              boxShadow: "10px 10px 0 #000",
              lineHeight: "1.2",
            }}
          >
            Backend Developer
          </h1>

          {/* Floating Card - Easy */}
          <div
            style={{
              position: "absolute",
              top: "-30px",
              left: "70px",
              background: "linear-gradient(145deg, #c499ff, #7243ff)",
              color: "#000",
              padding: "10px 20px",
              fontWeight: "600",
              fontSize: "18px",
              borderRadius: "10px",
              boxShadow: "8px 8px 0 #000",
              transform: "rotate(-5deg)",
              zIndex: 2,
            }}
          >
            End-to-End
          </div>

          {/* Floating Card - Easing */}
          <div
            style={{
              position: "absolute",
              top: "25px",
              left: "120px",
              background: "linear-gradient(145deg, #ffa94d, #ff9d9d)",
              color: "#000",
              padding: "10px 20px",
              fontWeight: "600",
              fontSize: "18px",
              borderRadius: "10px",
              boxShadow: "8px 8px 0 #000",
              transform: "rotate(10deg)",
              zIndex: 1,
            }}
          >
            Full Stack
          </div>
        </div>

        {/* Right Side - Additional Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <h1
              style={{
                fontSize: "44px",
                fontWeight: "900",
                color: "#fffde7",
                lineHeight: "1.2",
              }}
            >
              Perfect matches <br></br>for your  goals 
            </h1>
            <span style={{ fontSize: "48px", transform: "rotate(-15deg)" }}>
              🤘
            </span>
          </div>

          {/* 🟢 Added Line Below */}
          <p
            style={{
              fontSize: "20px",
              color: "#cccccc",
              maxWidth: "500px",
              fontWeight: "500",
            }}
          >
            Tailored talent for precise project needs – ensuring expertise,
            flexibility, and faster delivery.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default NiceAndEasySection;
