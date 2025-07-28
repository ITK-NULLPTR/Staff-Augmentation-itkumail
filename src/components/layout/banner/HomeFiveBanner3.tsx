// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import nine from "public/images/projects/nine.png";
// import ten from "public/images/projects/ten.png";
// import eleven from "public/images/projects/eleven.png";
// import twelve from "public/images/projects/twelve.png";
// import thirteen from "public/images/projects/thirteen.png";

// gsap.registerPlugin(ScrollTrigger);
// const HomeFiveBanner = () => {
//   const slider = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ele = slider.current;

//     if (window.innerWidth >= 992 && ele) {
//       gsap.registerPlugin(ScrollTrigger);

//       const rightSections = gsap.utils.toArray(".banner-five__single");

//       const pin = gsap.to(rightSections, {
//         xPercent: -100 * (rightSections.length - 3),
//         ease: "none",
//         scrollTrigger: {
//           trigger: ele,
//           pin: true,
//           invalidateOnRefresh: true,
//           start: "center center-=100",
//           scrub: 1,
//           end: () => "+=" + (slider.current?.offsetWidth || 0),
//           markers: false,
//         },
//       });

//       return () => {
//         pin.kill();
//       };
//     }
//   }, []);

//   return (
//     <div className="banner-five" ref={slider}>
//       <h2 className="title title-anim h-title ">
//         <strong>What We Bring to the Table</strong>{" "}
//       </h2>{" "}
//       <div className="banner-five__wrapper">
//         <div className="banner-five__single">
//           <div className="projects-s__single topy-tilt">
//             <div className="thumb">
//               <Link href="project-single">
//                 <Image src={nine} alt="Image" />
//               </Link>
//             </div>
//             <div className="content">
//               <h4>
//                 <Link href="project-single"> </Link>
//               </h4>
//             </div>
//           </div>
//         </div>
//         <div className="banner-five__single">
//           <div className="projects-s__single topy-tilt">
//             <div className="thumb">
//               <Link href="project-single">
//                 <Image src={ten} alt="Image" />
//               </Link>
//             </div>
//             <div className="content">
//               <h2 className="title">
//                 <strong>Award Winning</strong>{" "}
//                 <span
//                   style={{
//                     color: "#b0b0c3",
//                     borderBottom: "6px solid #b0b0c3",
//                     paddingBottom: "5px",
//                     display: "inline-block",
//                   }}
//                 >
//                   Branding Agency providing a wide range of digital services
//                 </span>
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="banner-five__single">
//           <div className="projects-s__single topy-tilt">
//             <div className="thumb">
//               <Link href="project-single">
//                 <Image src={eleven} alt="Image" />
//               </Link>
//             </div>
//             <div className="content">
//               <h2 className="title">
//                 <strong>Award Winning</strong>{" "}
//                 <span
//                   style={{
//                     color: "#b0b0c3",
//                     borderBottom: "6px solid #b0b0c3",
//                     paddingBottom: "5px",
//                     display: "inline-block",
//                   }}
//                 >
//                   Branding Agency providing a wide range of digital services
//                 </span>
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="banner-five__single">
//           <div className="projects-s__single topy-tilt">
//             <div className="thumb">
//               <Link href="project-single">
//                 <Image src={twelve} alt="Image" />
//               </Link>
//             </div>
//             <div className="content">
//               <h2 className="title">
//                   <strong>Award Winning</strong>{" "}
//                   <span
//                     style={{
//                       color: "#b0b0c3",
//                       borderBottom: "6px solid #b0b0c3",
//                       paddingBottom: "5px",
//                       display: "inline-block",
//                     }}
//                   >
//                     Branding Agency providing a wide range of digital services
//                   </span>
//                 </h2>
//             </div>
//           </div>
//         </div>
//         <div className="banner-five__single">
//           <div className="projects-s__single topy-tilt">
//             <div className="thumb">
//               <Link href="project-single">
//                 <Image src={thirteen} alt="Image" />
//               </Link>
//             </div>
//             <div className="content">
//               <h2 className="title">
//                   <strong>Award Winning</strong>{" "}
//                   <span
//                     style={{
//                       color: "#b0b0c3",
//                       borderBottom: "6px solid #b0b0c3",
//                       paddingBottom: "5px",
//                       display: "inline-block",
//                     }}
//                   >
//                     Branding Agency providing a wide range of digital services
//                   </span>
//                 </h2>
//             </div>
//           </div>
//         </div>
//         <div className="banner-five__single">
//           <div className="projects-s__single topy-tilt">
//             <div className="thumb">
//               <Link href="project-single">
//                 <Image src={nine} alt="Image" />
//               </Link>
//             </div>
//             <div className="content">
//               <h2 className="title">
//                   <strong>Award Winning</strong>{" "}
//                   <span
//                     style={{
//                       color: "#b0b0c3",
//                       borderBottom: "6px solid #b0b0c3",
//                       paddingBottom: "5px",
//                       display: "inline-block",
//                     }}
//                   >
//                 Branding Agency providing a wide range of digital services
//                   </span>
//                 </h2>
//             </div>
//           </div>
//         </div>
       
//          <div className="banner-five__single">
         
//         </div>
//         <div className="banner-five__single">
         
//         </div>
//           <div className="banner-five__single">
       
//         </div>
             
//          <div className="banner-five__single">
       
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeFiveBanner;



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
    gsap.fromTo(
      section,
      {
        x: "-100vw", // start off-screen left
        opacity: 1,
        scale: 0.95,
      },
      {
        x: "100vw", // end off-screen right
        opacity: 1,
        scale: 1,
        ease: "none", // tied to scroll
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%", // longer scroll for smoother, slower animation
          scrub: 1, // smooth connection to scroll
          pin: true,
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section
      className="section agency"
      ref={sectionRef}
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-12">
            <div className="agency__content section__content">
              <span className="sub-title">
                WELCOME <i className="fa-solid fa-arrow-right"></i>
              </span>
              <div className="heading-block">
                <h2 className="title">
                  <strong>Compatible with Any Stack or </strong>{" "}
                  <span
                    style={{
                      color: "#B0B0C3",
                      borderBottom: "6px solid #B0B0C3",
                      paddingBottom: "5px",
                      display: "inline-block",
                    }}
                  >
                    Workflow
                  </span>
                </h2>
              </div>
              <div className="heading-block">
                <h2 className="title">
                  Custom code, CMS, or third-party tools
                </h2>
              </div>
              <div className="heading-block hover-heading">
                <h2 className="title">
                  <strong>
                  Our developers adapt to your<br></br>  {" "}
                    <span style={{ color: "#6AC72A" }}>Development</span>
                  </strong>
                  <br />
            No process changes. No {" "}
                  <span
                    style={{
                      color: "#B0B0C3",
                      borderBottom: "6px solid #B0B0C3",
                      paddingBottom: "5px",
                      display: "inline-block",
                    }}
                  >
                  tech conflicts.…
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
      {/* <Image
        src={dotlarge}
        alt="Dot Decoration"
        className="dot-large"
        priority
      /> */}
    </section>
  );
};
export default Agency;