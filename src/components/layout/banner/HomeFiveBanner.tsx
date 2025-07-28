"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Example images – replace with your own
import star from "public/images/star.png";
import dotlarge from "public/images/agency/f2.png";
import img3 from "public/images/agency/f1.png";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
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
      className="section agency"
      style={{
        height: "100vh",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        // backgroundColor: "#0d0d0d",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {/* Left text block */}
        <div style={{ maxWidth: "50%", paddingLeft: "60px" }}>
          <h3
            style={{
              backgroundColor: "#f9d8ff",
              color: "#2b1d2c",
              padding: "8px 16px",
              display: "inline-block",
              borderRadius: "10px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Frontend Developer
          </h3>
          <h2
            style={{
              backgroundColor: "#ff8400",
              color: "#000",
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: "700",
              display: "inline-block",
              marginBottom: "24px",
              fontSize: "32px",
            }}
          >
            That’s right, Anything
          </h2>
          <p style={{ fontSize: "22px", lineHeight: "1.5", color: "#eee" }}>
            Whether you're animating UI, SVG or creating immersive WebGL experiences, GSAP has your
            back.
          </p>
        </div>

        {/* Right animated images */}
        <div style={{ position: "relative", width: "45%", height: "100%" }}>
          <Image
            src={img3}
            alt="Big Image"
            className="img-big"
            style={{
              width: "500px",
              // height: "200px",
              position: "fixed",
              bottom: "10%",
              right: "10%",
              borderRadius: "20px",
              objectFit: "cover",
              zIndex: 3,
            }}
          />

          <Image
            src={star}
            alt="Floating 1"
            className="img1"
            style={{
              width: "80px",
              height: "80px",
              // position: "absolute",
              // top: "20%",
              // right: "40%",
              objectFit: "contain",
            }}
          />

          <Image
            src={dotlarge}
            alt="Floating 2"
            className="img2"
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              top: "-40%",
              right: "45%",
              objectFit: "contain",
            }}
          />

     
        </div>
      </div>
    </section>
  );
};

export default Agency;
