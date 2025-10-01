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
     firstName: "You feel ",
    lastName: "the pressure",
    image: team1,
  },
  {
     firstName: "The deadlines",
    lastName: "tighten",
    image: team2,
  },
  {
     firstName: "The ideas",
    lastName: "are there",
    image: team3,
  },
  {
     firstName: "But the hands to build them are stretched thin",
    lastName: "",
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
     

        <div className="team__wrapper anim-skewinup">
          {teamMembers.map((member, index) => (
            <div className="team__member" key={index}>
               <a href="/team-details">
                <div className="member-name">
                  <span className="first-name">{member.firstName}</span>

                  {index < 3 ? (
                    <div className="member-image">
                      <Image src={member.image} alt="Team" />
                    </div>
                  ) : (
                    <h3 className="fourth-member-heading">{member.lastName}</h3>
                  )}

                  {index < 3 && <span className="last-name">{member.lastName}</span>}
                </div>
              </a>

         
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
