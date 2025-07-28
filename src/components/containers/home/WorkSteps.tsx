"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import videoframe from "public/images/video-frame.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkSteps = () => {
  const [hover, setHover] = useState(0);
  const [videoActive, setVideoActive] = useState(false);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const steps = stepsRef.current;
  if (!containerRef.current || steps.length === 0) return;

  // Hide all steps initially
  gsap.set(steps, { opacity: 0, visibility: "hidden" });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=400%", // Adjust scroll length for smoother animation
      scrub: true,
      pin: true,
    },
  });

  steps.forEach((step, i) => {
    tl.set(step, { visibility: "visible" });
    tl.to(step, { opacity: 1, duration: 0.3 }, `+=0.6`);
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);


  return (
    <>
      <section
        ref={containerRef}
        className="section work-steps fade-wrapper"
        style={{
          position: "relative",
          background: "radial-gradient(circle at top left, #0F0F0F, #1C1C1C)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__header--secondary">
                <div className="row gaper align-items-center">
                  <div className="col-12 col-lg-5 col-xxl-5">
                    <div className="section__header text-center text-lg-start mb-0">
                      <span className="sub-title">
                        working steps <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">Our Work Process</h2>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                    <div className="text-center text-lg-start">
                      <p>
                        Bring to the table win-win survival strategies to ensure
                        proactive domination. At the end of the day, going forward,
                        a new normal that has evolved from generation...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="row">
            {[0, 1, 2, 3].map((i) => (
              <div className="col-12 col-sm-6 col-xl-3" key={i}>
                <div
                  ref={(el) => el && (stepsRef.current[i] = el)}
                  className={`work-steps__single fade-top ${
                    i === 1
                      ? "work-two"
                      : i === 2
                      ? "work-three"
                      : i === 3
                      ? "work-four"
                      : ""
                  } ${hover === i ? "work-steps__single-active" : ""}`}
                  onMouseEnter={() => setHover(i)}
                >
                  <span>
                    {(i + 1) * 25}
                    <br />%
                  </span>
                  <h5>
                    {[
                      "Discover & Strategy",
                      "Wireframes & User-flows",
                      "Hi-Fidelity design",
                      "Development Phase",
                    ][i]}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Button */}
        <button
          className="video-frame video-btn d-none d-md-flex"
          onClick={() => setVideoActive(true)}
        >
          <Image src={videoframe} alt="Video Frame" />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>
      </section>

      {/* Video Modal */}
      <div
        className={`video-backdrop ${videoActive ? "video-zoom-in" : ""}`}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSteps;
