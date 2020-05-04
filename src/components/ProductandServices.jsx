import React from "react";
import fiverr from "./fiverr.png";

const ProductandServices = () => {
  return (
    <div>
      <img src={fiverr}></img>
      <h1>Fiverr's Services</h1>
      <h3> Fiver Pro </h3>
      <p>
        {" "}
        We personally verify our Pros to exceed your expectations. Put a Pro in
        charge of your next project and prepare to be wowed.
      </p>
      <h3> Selling on Fiverr</h3>
      <p>
        {" "}
        Fiverr is the world's largest marketplace for digital services. So, if
        you have a talent, you can share that talent with our buyer community
        and make money while you are at it. Whether you are a graphic designer,
        programmer, content writer, translator, or voice over artist, Fiverr has
        a place for you. Below is a series of videos explaining what you need to
        do to start selling on Fiverr.
      </p>
      <h3> Buying on Fiverr</h3>
      <p>
        Use Fiverr to easily hire freelancers for your projects. Join over
        11,000,000 happy businesses who found their freelance match in minutes.
      </p>
    </div>
  );
};

export default ProductandServices;
