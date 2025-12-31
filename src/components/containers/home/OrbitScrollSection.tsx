"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OrbitScrollSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageElementsRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const content = contentRef.current;
    const images = imagesRef.current;
    const imageElements = imageElementsRef.current;

    if (!section || !pin || !content) return;

    const radius = window.innerWidth < 768 ? 230 : 370;
    const offsetDesk_X = window.innerWidth < 768 ? 0 : 75;
    const offsetMobile_X = window.innerWidth > 768 ? 0 : 50;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom+=200% top",
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
        transformPerspective: 1000,
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const imageData = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
      alt: "Mountain landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=800&fit=crop",
      alt: "Nature scene",
    },
    {
      src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=800&fit=crop",
      alt: "Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1764269716681-043e7aad61bd?w=800&h=800&fit=crop",
      alt: "Wedding photographer",
    },
    {
      src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=800&fit=crop",
      alt: "City lights",
    },
    {
      src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&h=800&fit=crop",
      alt: "Sushi",
    },
    {
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=800&fit=crop",
      alt: "Villa with pool",
    },
    {
      src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&h=800&fit=crop",
      alt: "Beach scene",
    },
  ];

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
            height:  "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              AI is not just disrupting <br /> how people search
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
              It is deciding what they see and what they do not. If your brand
              is not part of the answer, it is not part of the conversation.
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
              >
                Contact us
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
                width: "600px",
                height: "1250px",
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
                    className="w-50 h-50 md:w-75 md:h-75 lg:w-100 lg:h-100 "
                    style={{
                      borderRadius: "1rem",
                      overflow: "hidden",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      border: "4px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s",
                    }}
                  >
                    <img
                      ref={(el) => {
                        imageElementsRef.current[index] = el;
                      }}
                      src={image.src}
                      alt={image.alt}
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
