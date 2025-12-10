"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandPrograms = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
          <div className="overflow-hidden">
            <div className="block">Our brand-building programs</div>
          </div>
        </h2>
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
          <div className="overflow-hidden">
            <div className="block">
              We’ve poured our 15 years of expertise into
            </div>
          </div>
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
          <div className="overflow-hidden">
            <div className="block">
              ways of working fit for every opportunity.
            </div>
          </div>
        </h2>
      </div>
      <div className="flex items-start justify-between">
        <a
          href="/shakeup"
          className="group inline-flex items-center gap-2 transition-all hover:gap-3"
        >
          
          <div className="relative overflow-hidden bg-black rounded">
            <img
            src="https://cdn.prod.website-files.com/671614fdaa6a0812f40213dc/67175bd618412f03952bd2c6_%E2%86%92.svg"
            loading="lazy"
            alt="Black arrow"
            className="w-4 h-6 "
          />
            <button className="text-lg font-semibold absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform">
             <p >SHAKEUP</p>
            </button>
          </div>
        </a>
        <div className="col-4 flex ml-[200px] ">
          <img
            src="/images/fire.gif"
            loading="lazy"
            alt=""
            className="w-6 h-6 flex-shrink-0"
          />
          <h3 className="text-red-600 text-5xl font-bold text-black">
          <div className="overflow-hidden">
            <div className="block text-left relative opacity-100">Shakeup</div>
          </div>
        </h3>
         <h3 className="text-red-600 text-5xl font-bold text-black">
          <div className="overflow-hidden">
            <div className="block text-left relative opacity-100">Shakeup</div>
          </div>
        </h3>
        </div>
        
      </div>
      <div className="flex items-start justify-between">
        <a
          href="/shakeup"
          className="group inline-flex items-center gap-2 transition-all hover:gap-3"
        >
          
          <div className="relative overflow-hidden bg-black rounded">
            <img
            src="https://cdn.prod.website-files.com/671614fdaa6a0812f40213dc/67175bd618412f03952bd2c6_%E2%86%92.svg"
            loading="lazy"
            alt="Black arrow"
            className="w-4 h-6 "
          />
            <button className="text-lg font-semibold absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform">
             <p >SHAKEUP</p>
            </button>
          </div>
        </a>
        <div className="col-4 flex ml-[200px] ">
          <img
            src="/images/Slingshot.gif"
            loading="lazy"
            alt=""
            className="w-6 h-6 flex-shrink-0"
          />
          <h2 className="text-red-600 text-5xl font-bold text-black">
          <div className="overflow-hidden">
            <div className="block text-left relative opacity-100">Shakeup</div>
          </div>
        </h2>
         <h2 className="text-red-600 text-5xl font-bold text-black">
          <div className="overflow-hidden">
            <div className="block text-left relative opacity-100">Shakeup</div>
          </div>
        </h2>
        </div>
        
      </div>
      <div className="flex items-start justify-between">
        <a
          href="/shakeup"
          className="group inline-flex items-center gap-2 transition-all hover:gap-3"
        >
          
          <div className="relative overflow-hidden bg-black rounded">
            <img
            src="https://cdn.prod.website-files.com/671614fdaa6a0812f40213dc/67175bd618412f03952bd2c6_%E2%86%92.svg"
            loading="lazy"
            alt="Black arrow"
            className="w-4 h-6 "
          />
            <button className="text-lg font-semibold absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform">
             <p >SHAKEUP</p>
            </button>
          </div>
        </a>
        <div className="col-4 flex ml-[200px] ">
          <img
            src="/images/bottle.gif"
            loading="lazy"
            alt=""
            className="w-6 h-6 flex-shrink-0"
          />
          <h2 className="text-red-600 text-5xl font-bold text-black">
          <div className="overflow-hidden">
            <div className="block text-left relative opacity-100">Shakeup</div>
          </div>
        </h2>
         <h2 className="text-red-600 text-5xl font-bold text-black">
          <div className="overflow-hidden">
            <div className="block text-left relative opacity-100">Shakeup</div>
          </div>
        </h2>
        </div>
        
      </div>
    </section>
  );
};

export default BrandPrograms;
