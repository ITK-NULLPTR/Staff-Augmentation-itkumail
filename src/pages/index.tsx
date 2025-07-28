import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import Agency2 from "@/components/containers/home/Agency2";
import Agency3 from "@/components/containers/home/Agency3";

import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeFiveBanner from "@/components/layout/banner/HomeFiveBanner";
import HomeFiveBanner2 from "@/components/layout/banner/HomeFiveBanner2";
// import HomeFiveBanner3 from "@/components/layout/banner/HomeFiveBanner3";

// import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import WorkSteps from "@/components/containers/home/WorkSteps";

// import HomeTestimonial from "@/components/containers/home/HomeTestimonial";

const Home = () => {
  return (
    <Layout header={1} footer={1} video={true}>
      <HomeOneBanner />
      <Agency />
      <HomeFiveBanner />
      <HomeFiveBanner2 />
            {/* <HomeFiveBanner2 /> */}

      <Agency2 />
      <Agency3 />

      {/* <HomeFiveBanner /> */}

 
      <HomeTestimonial />
      <PortfolioText />
      <WorkSteps />
      <HomeSponsor />
      {/* <HomeOffer /> */}
      {/* <HomeTestimonial /> */}
      {/* <HomeBlog /> */}
      {/* <HomeSponsor /> */}
      {/* <NextPage /> */}
    </Layout>
  );
};

export default Home;
