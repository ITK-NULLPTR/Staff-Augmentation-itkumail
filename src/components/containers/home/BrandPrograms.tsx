/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandProgramsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleSubtitles, setVisibleSubtitles] = useState<number[]>([]);
  const subtitleRefs = useRef<Record<string, HTMLHeadingElement | null>>({});
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set(document.body, { backgroundColor: "#0e0e0e" });

    ScrollTrigger.create({
      trigger: section,
      start: "top 70%",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(document.body, { backgroundColor: "#ffffff", duration: 0.8 });
      },
      onEnterBack: () => {
        gsap.to(document.body, { backgroundColor: "#ffffff", duration: 0.8 });
      },
      onLeave: () => {
        gsap.to(document.body, { backgroundColor: "#0e0e0e", duration: 0.8 });
      },
      onLeaveBack: () => {
        gsap.to(document.body, { backgroundColor: "#0e0e0e", duration: 0.8 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.set(document.body, { backgroundColor: "" });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idStr = entry.target.getAttribute("data-program-id");
          if (!idStr) return;

          const id = parseInt(idStr);
          if (entry.isIntersecting) {
            setVisibleSubtitles((prev) => Array.from(new Set([...prev, id])));
          } else {
            setVisibleSubtitles((prev) => prev.filter((item) => item !== id));
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-25% 0px -25% 0px",
      }
    );

    Object.values(subtitleRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(subtitleRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const programs = [
    {
      id: 1,
      name: "Shakeup",
      subtitle: "Change your Market",
      image:
        "https://cdn.prod.website-files.com/671614fdaa6a0812f40213dc/67314d70b4c68c8bc6ece278_Shakeup-bottle-black.gif",
      link: "/shakeup",
    },
    {
      id: 2,
      name: "Slingshot",
      subtitle: "Launch Your Innovation",
      image:
        "https://cdn.prod.website-files.com/671614fdaa6a0812f40213dc/67314d708d6b310062c07480_Slingshot.gif",
      link: "/slingshot",
    },
    {
      id: 3,
      name: "Ignite",
      subtitle: "Fire Up Your Business",
      image:
        "https://cdn.prod.website-files.com/671614fdaa6a0812f40213dc/67314d70b4c68c8bc6ece274_Ignite.gif",
      link: "/ignite",
    },
    {
      id: 4,
      name: "AndAction!",
      subtitle: "Keep Building Your Brand",
      image:
        "https://cdn.prod.website-files.com/671614fdaa6a0812f40213dc/67314d70a1a931a7d3dc24ec_Action.gif",
      link: "/and-action",
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="brand-programs-section-wrapper"
        style={{
          paddingTop: "10rem",
          paddingBottom: "10rem",
          transition: "background-color 1s ease",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="mb-4 mb-md-5" style={{ marginTop: "2rem" }}>
            <h2
              className="fw-bold mb-3 text-danger"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 4rem)",
                lineHeight: "1.2",
              }}
            >
              Our brand-building programs
            </h2>
            <h2
              className="fw-bold text-black"
              style={{
                fontSize: "clamp(1.75rem, 5vw, 4rem)",
                lineHeight: "1.3",
              }}
            >
              We have poured our 15 years of expertise into ways of working fit
              for every opportunity.
            </h2>
          </div>

          <div className="row g-3 g-md-4 g-lg-5">
            {programs.map((program) => (
              <div
                key={program.id}
                className="col-12 mb-3 mb-md-4 mb-lg-5 mt-4 mt-md-4 mt-lg-5 "
                onMouseEnter={() => setHoveredIndex(program.id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="row align-items-end d-none d-md-flex">
                  <div className="col-md-3 col-lg-3">
                    <h3
                      className="fw-bold text-danger"
                      style={{
                        opacity: hoveredIndex === program.id ? 1 : 0.8,
                        transform:
                          hoveredIndex === program.id
                            ? "translateY(0)"
                            : "translateY(20px)",
                        transition: "all 0.5s ease",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      }}
                    >
                      {program.name}
                    </h3>
                  </div>

                  <div className="col-md-6 col-lg-6 text-center text-md-end mw-100 h-auto">
                    <img
                      src={program.image}
                      alt={program.name}
                      style={{
                        width: "clamp(200px, 30vw, 350px)",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div className="col-md-3 col-lg-3 text-end">
                    <button
                      className="btn btn-danger text-white px-3 px-lg-4 py-2 py-lg-3 fw-bold"
                      style={{
                        fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                        cursor: "pointer",
                        border: "none",
                      }}
                    >
                      → {program.name}
                    </button>
                  </div>
                </div>

                <div className="d-md-none">
                  <div className="mb-3 text-end">
                    <img
                      src={program.image}
                      alt={program.name}
                      style={{
                        maxWidth: "100%",
                        width: "clamp(180px, 60vw, 250px)",
                        height: "auto",
                        objectFit: "contain",
                        marginTop: "29px",
                      }}
                    />
                    <h3
                      className="fw-bold text-start text-danger px-1"
                      style={{
                        fontSize: "clamp(2.6875rem, 8vw, 3rem)",
                        marginBottom: "1rem",
                        color: "#ff5d60",
                      }}
                    >
                      {program.name}
                    </h3>
                  </div>


                </div>
                <h4
                  ref={(el) => {
                    if (el) subtitleRefs.current[program.id] = el;
                  }}
                  data-program-id={program.id}
                  className="text-end text-md-start fw-bold mt-3 mt-md-4 text-black"
                  style={{
                    fontSize: "clamp(2.6875rem, 5vw, 3.5rem)",
                    opacity: visibleSubtitles.includes(program.id) ? 1 : 0,
                    transform: visibleSubtitles.includes(program.id)
                      ? "translateX(0)"
                      : "translateX(50px)",
                    transition: "all 1s ease",
                    lineHeight: "1.2",

                  }}
                >
                  {program.subtitle}
                </h4>
                <div className="d-md-none  ">
                  <div className="text-start">
                    <button
                      className="btn btn-danger text-white px-1 lg:px-4 py-3 lg:py-3 fw-bold w-50"
                      onClick={() => (window.location.href = program.link)}
                      style={{
                        fontSize: "1rem",
                        maxWidth: "300px",
                        cursor: "pointer",
                        border: "none",
                      }}
                    >
                      → {program.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandProgramsSection;
