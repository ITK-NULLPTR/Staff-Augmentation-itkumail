"use client";

import React from "react";

const HomeOneBanner = () => {
  return (
    <section
      className="banner1 hero-banner"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        src="https://itkumail.com/wp-content/uploads/2024/10/31154486-online-video-cutter.com-1.mp4"  
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </section>
  );
};

export default HomeOneBanner;
