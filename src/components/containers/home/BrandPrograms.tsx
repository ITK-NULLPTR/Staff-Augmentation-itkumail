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

     gsap.set(section, { backgroundColor: "#000000" });

    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",      
      end: "bottom 40%",
      onEnter: () => {
        gsap.to(section, { backgroundColor: "#ffffff", duration: 0.4 });
      },
      onEnterBack: () => {
        gsap.to(section, { backgroundColor: "#ffffff", duration: 0.4 });
      },
      onLeave: () => {
        gsap.to(section, { backgroundColor: "#000000", duration: 0.4 });
      },
      onLeaveBack: () => {
        gsap.to(section, { backgroundColor: "#000000", duration: 0.4 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
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
            setVisibleSubtitles((prev) =>
              Array.from(new Set([...prev, id]))
            );
          } else {
            setVisibleSubtitles((prev) =>
              prev.filter((item) => item !== id)
            );
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
          paddingTop: "6rem",
          paddingBottom: "3rem",
          transition: "background-color 1s ease",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="mb-5" style={{ marginTop: "7rem" }}>
            <h2 className="brand-heading-large fw-bold text-danger mb-3">
              Our brand-building programs
            </h2>
            <h2 className="brand-heading-large fw-bold text-dark lh-sm">
              We've poured our 15 years of expertise into
              <br className="d-none d-md-block" />
              ways of working fit for every opportunity.
            </h2>
          </div>

          <div className="row g-4 g-md-5">
            {programs.map((program) => (
              <div
                key={program.id}
                className="col-12 mb-4 mb-md-5"
                onMouseEnter={() => setHoveredIndex(program.id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                 <div className="row align-items-end d-none d-md-flex">
                  <div className="col-md-3">
                    <h3
                      className="fw-bold text-danger"
                      style={{
                        opacity: hoveredIndex === program.id ? 1 : 0.3,
                        transform:
                          hoveredIndex === program.id
                            ? "translateY(0)"
                            : "translateY(20px)",
                        transition: "all 0.5s ease",
                        fontSize: "clamp(3rem, 6vw, 4rem)",
                      }}
                    >
                      {program.name}
                    </h3>
                  </div>

                  <div className="col-md-6 text-end">
                    <img
                      src={program.image}
                      alt={program.name}
                      style={{
                        maxWidth: "300px",
                        height: "300px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div className="col-md-3 text-end">
                    <button
                      className="btn btn-danger   px-4 py-3 fw-bold"
                      onClick={() => (window.location.href = program.link)}
                    >
                      → {program.name}
                    </button>
                  </div>
                </div>

                 <h4
                  ref={(el) => {
                    if (el) subtitleRefs.current[program.id] = el;
                  }}
                  data-program-id={program.id}
                  className="fw-bold text-dark mt-4"
                  style={{
                    fontSize: "clamp(2rem, 6vw, 4rem)",
                    opacity: visibleSubtitles.includes(program.id) ? 1 : 0,
                    transform: visibleSubtitles.includes(program.id)
                      ? "translateY(0)"
                      : "translateY(50px)",
                    transition: "all 1s ease",
                  }}
                >
                  {program.subtitle}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandProgramsSection;
