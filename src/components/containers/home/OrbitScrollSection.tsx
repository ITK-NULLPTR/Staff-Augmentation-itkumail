"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OrbitScrollSection = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    isMobile: false,
  });

  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageElementsRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    setScreenSize({
      width: window.innerWidth,
      isMobile: window.innerWidth < 768,
    });

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        isMobile: window.innerWidth < 768,
      });
    };

    window.addEventListener("resize", handleResize);

    const section = sectionRef.current;
    const pin = pinRef.current;
    const content = contentRef.current;
    const images = imagesRef.current;
    const imageElements = imageElementsRef.current;

    if (!section || !pin || !content) return;

    const radius = window.innerWidth < 768 ? 200 : 370;
    const offsetDesk_X = window.innerWidth < 768 ? 0 : 0;
    const offsetMobile_X = window.innerWidth > 768 ? 0 : 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.set(content, {
      opacity: 0,
      scale: 0.8,
      visibility: "hidden",
    });

    images.forEach((img) => {
      if (!img) return;
      gsap.set(img, {
        x: 0,
        y: 0,
        rotation: 0,
        rotationY: 0,
        rotationX: 0,
        scale: 0.8,
        opacity: 0.3,
        transformOrigin: "center center",
      });
    });

    images.forEach((img, index) => {
      if (!img) return;

      const angle = index * 45;
      const finalX =
        Math.cos(((angle - 90) * Math.PI) / 180) * radius +
        offsetDesk_X +
        offsetMobile_X;
      const finalY = Math.sin(((angle - 90) * Math.PI) / 180) * radius;

      tl.to(
        img,
        {
          x: finalX,
          y: finalY,
          rotation: 360,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.05,
        },
        0
      );
      tl.to(
        img,
        {
          rotation: `+=${360}`,
          duration: 0.3,
          ease: "none",
        },
        0.5
      );
      if (imageElements[index]) {
        gsap.to(imageElements[index], {
          x: () => gsap.utils.random(-5, 5),
          y: () => gsap.utils.random(-3, 3),
          rotation: () => gsap.utils.random(-2, 2),
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.1,
        });
      }
    });

    tl.to(
      content,
      {
        opacity: 1,
        visibility: "visible",
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      0.6
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const imageData = [
    { src: "/images/orbit/01.jpg", alt: "Mountain" },
    { src: "/images/orbit/02.jpg", alt: "Nature" },
    { src: "/images/orbit/03.png", alt: "Architecture" },
    { src: "/images/orbit/04.jpg", alt: "Wedding" },
    { src: "/images/orbit/05.jpg", alt: "City" },
    { src: "/images/orbit/06.jpg", alt: "Sushi" },
    { src: "/images/orbit/07.jpg", alt: "Villa" },
    { src: "/images/orbit/08.jpg", alt: "Beach" },
  ];

  const getImageSize = () => {
    if (screenSize.width >= 992) return "180px";
    if (screenSize.width >= 768) return "90px";
    return "90px";
  };

  return (
    <>
      <section
        ref={sectionRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          background: "black",
          overflow: "hidden",
        }}
      >
        <div
          ref={pinRef}
          style={{
            position: "relative",
            width: "100%",
            height: screenSize.isMobile ? "100vh" : "120vh", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "clamp(1.8rem, 5vw, 6.25rem)",
          }}
        >
          <div
            ref={contentRef}
            style={{
              position: "absolute",
              zIndex: 20,
              maxWidth: "42rem",
              margin: "0 auto",
              padding: "0 1.5rem",
              textAlign: "center",
              opacity: 0,
              transform: "scale(0.8)",
              visibility: "hidden",
            }}
          >
            <h2
              className="mb-1 md:mb-4 lg:mb-6"
              style={{
                fontSize: "clamp(0.8rem, 5vw, 2.25rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.25,
              }}
            >
              Your required talent is closer <br />
              than you think.
            </h2>
            <p
              className="mb-4 md:mb-6 lg:mb-8"
              style={{
                fontSize: "clamp(0.6rem, 3vw, 1.25rem)",
                color: "#d1d5db",
                lineHeight: 1.625,
                padding: "0px 24px",
              }}
            >
              Bridge the gap and engage the Unseen Hand.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  padding: "0.75rem 1.75rem",
                  background: "linear-gradient(to right, #9333ea, #db2777)",
                  color: "white",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <a
                  href="https://itkumail.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact us
                </a>
              </button>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "1250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "500px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {imageData.map((image, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    imagesRef.current[index] = el;
                  }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className="orbit-image rounded shadow-lg border border-light border-opacity-10"
                    style={{
                      width: getImageSize(), 
                      height: getImageSize(),
                      overflow: "hidden",
                      transition: "all 0.3s",
                    }}
                  >
                    <img
                      ref={(el) => {
                        imageElementsRef.current[index] = el;
                      }}
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrbitScrollSection;