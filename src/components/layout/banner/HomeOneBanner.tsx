"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import star from "public/images/star.png";
import videoframe from "public/images/video-frame.png";

gsap.registerPlugin(ScrollTrigger);

const HomeOneBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: banner,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    // Animate banner
    tl.fromTo(
      banner,
      { y: 0, scale: 1, opacity: 1 },
      { y: -200, scale: 1.1, opacity: 0, duration: 2 },
      0
    );

    // Animate video frame independently downward
    tl.to(
      ".video-frame",
      {
        y: 500, x:-200, // move down by 200px
        ease: "power2.out",
        scale: 2.1,duration: 2 ,opacity: 1,
      },
      0 // starts with banner animation
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={bannerRef}
        className="banner hero-banner"
        style={{ height: "100vh", position: "relative", overflow: "hidden" }}
      >
        <div className="container h-100 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                  Build Your <span className="text-stroke">Dream Tech Team </span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> No Hassle, No Gaps
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <Image src={star} alt="Star" className="star" priority />

        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info@xpovio.com">mail : @itkumail.com</Link>
          <Link href="tel:+923000000000">Call : +923000000000</Link>
        </div>

        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link href="#" target="_blank">instagram</Link>
          <Link href="#" target="_blank">LinkedIn</Link>
          <Link href="#" target="_blank">facebook</Link>
        </div>

 
      </section>
    </>
  );
};

export default HomeOneBanner;
