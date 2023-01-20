import React from "react";
import Contribute from "../../components/home-comp/contribute/Contribute";
import Hero from "../../components/home-comp/hero/Hero";
import WhyDonate from "../../components/home-comp/WhyDonate/WhyDonate";
import Navbar from "../../components/shared/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyDonate />
      <Contribute />

      {/* <CharitableUser />
      <PaymentsTabs /> */}
    </div>
  );
};

export default Home;
