"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import img3 from "public/images/agency/hover3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      section,
      {
        x: -400,
        y: 200,
        opacity: 0,
        scale: 0.95,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    ).to(section, {
      x: 400,
      y: -200,
      opacity: 0,
      scale: 1,
      duration: 1.2,
      ease: "power2.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="section agency"
      ref={sectionRef}
      style={{ height: "100vh", position: "relative", overflow: "hidden" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-12">
            <div className="agency__content section__content">
              <span className="sub-title">
                <i className="fa-solid fa-arrow-right"></i>
              </span>

              <div className="heading-block">
                <h2 className="title">
                  <strong>100% Focused</strong>{" "}
                  <span
                    style={{
                      color: "#b0b0c3",
                      borderBottom: "6px solid #b0b0c3",
                      paddingBottom: "5px",
                      display: "inline-block",
                    }}
                  >
                   Resources 
                  </span>
                </h2>
              </div>

              <div className="heading-block">
                <h2 className="title">
                No juggling projects — full focus on <br></br>your work. Dedicated experts,
                </h2>
              </div>

              <div className="heading-block hover-heading">
                <h2 className="title">
                  <strong>
                   just like your  {" "}
                    <span style={{ color: "#6AC72A" }}>in-house team</span>
                  </strong>
                  <br />
                Total alignment with your  {" "}
                  <span
                    style={{
                      color: "#b0b0c3",
                      borderBottom: "6px solid #b0b0c3",
                      paddingBottom: "5px",
                      display: "inline-block",
                    }}
                  >
                goals and timeline..
                  </span>
                </h2>

                <div className="hover-img">
                  <Image src={img3} alt="Decorative" width={278} height={338} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image src={star} alt="Star Decoration" className="star" priority />
      <Image
        src={dotlarge}
        alt="Dot Decoration"
        className="dot-large"
        priority
      />
    </section>
  );
};

export default Agency;
