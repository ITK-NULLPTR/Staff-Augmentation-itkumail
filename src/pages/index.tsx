import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency3 from "@/components/containers/home/Agency3";

import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeFiveBanner from "@/components/layout/banner/who'sthere";
import HomeFiveBanner2 from "@/components/layout/banner/HomeFiveBanner2";

import HomeSponsor from "@/components/containers/home/HomeTextslider";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import WorkSteps from "@/components/containers/home/WorkSteps";
import HomeTextslider2 from "@/components/containers/home/HomeTextslider2";
import HomeTextslider from "@/components/containers/home/HomeTextslider";
import HomeTextslider3 from "@/components/containers/home/HomeTextslider3";
 import Has from "@/components/containers/home/Has";
import An from "@/components/containers/home/An";
import Hand from "@/components/containers/home/Hand";
import Unseen from "@/components/containers/home/Unseen";
import WhoIsThere from "@/components/layout/banner/who'sthere";

const Home = () => {
  return (
    <Layout header={1} footer={1} video={true}>
      <HomeOneBanner />
      <HomeTextslider />
      <HomeTextslider2 />
      <HomeTextslider3 />
      {/* <Has /> */}
      <An />
      {/* <Unseen /> */}
      {/* <Hand /> */}
      <WorkSteps />
      {/* <HomeSponsor /> */}
      {/* <HomeFiveBanner2 /> */}
      {/* <PortfolioText /> */}
      <WhoIsThere />
    </Layout>
  );
};

export default Home;
