import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import videoframe from "public/images/video-frame.png";

gsap.registerPlugin(ScrollTrigger);

const VideoFrameSticky = () => {
useEffect(() => {
  const frame = document.querySelector(".video-frame");
  if (!frame) return;

  gsap.set(frame, {
    position: "fixed",
     top: "-150px",
     bottom:"470px",
    right: "420px",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".video-holder",
      start: "top top",
      // end: "+=200", // Adjust scroll range as needed
      scrub: true,
    },
  });
 

  // Then slide left
  tl.to(frame, {
     y:"200",
    opacity: 0,
    ease: "power2.inOut",
  });
}, []);


  return (
    <section
      className="video-holder"
      style={{
        // height: "100vh",
        position: "relative",
        zIndex: 10,
        backgroundColor: "#000",
      }}
    >
      <button
        className="video-frame"
        style={{
          zIndex: 1000,
        }}
      >
        <Image src={videoframe} alt="Play" priority />
       </button>
    </section>
  );
};

export default VideoFrameSticky;   