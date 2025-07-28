"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import team1 from "public/images/agency/hover3.jpg";
import team2 from "public/images/agency/hover3.jpg";
import team3 from "public/images/agency/hover3.jpg";
import team4 from "public/images/agency/hover3.jpg";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    designation: "App Designer",
    firstName: "Adaam",
    lastName: "Smith",
    image: team1,
  },
  {
    designation: "UI/UX Designer",
    firstName: "Henry",
    lastName: "Jhonson",
    image: team2,
  },
  {
    designation: "Web Developer",
    firstName: "Carolina",
    lastName: "Cab",
    image: team3,
  },
  {
    designation: "Digital Marketer",
    firstName: "Sophie",
    lastName: "Ferrer",
    image: team4,
  },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const teamItems = section.querySelectorAll(".team__member");

    gsap.fromTo(
      teamItems,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      className="team-area section-spacing p-relative"
      ref={sectionRef}
      style={{
        backgroundImage: "url('/images/banner/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="row align-items-end g-5 section-title-spacing">
          <div className="col-lg-6">
            <div className="section__title-wrapper">
              <div className="section__subtitle">
                <p className="section__subtitle-text">Our Core Team Members</p>
              </div>
              <h2 className="section__title-main xlarge uppercase title-anim">
                Awesome <br /> Team
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team__meta-description mb-10">
              <p className="xlarge">
                Lift is a full-service, award-winning digital agency with
                expertise in brand & digital strategy, design, and user
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="team__wrapper anim-skewinup">
          {teamMembers.map((member, index) => (
            <div className="team__member" key={index}>
              <span className="member-designation">{member.designation}</span>
              <a href="/team-details">
                <div className="member-name">
                  <span className="first-name">{member.firstName}</span>
                  <div className="member-image">
                    <Image src={member.image} alt="Team" />
                  </div>
                  <span className="last-name">{member.lastName}</span>
                </div>
              </a>
              <div className="member-details-btn btn_wrapper">
                <a className="c-button btn-moving" href="/team-details">
                  <span className="c-button__border"></span>
                  <span className="c-button__text">Details</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
