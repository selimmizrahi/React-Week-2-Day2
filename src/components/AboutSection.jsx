import React from "react";
import fiverr from "./fiverr.png";

function AboutSection() {
  return (
    <div>
      <img src={fiverr}></img>
      <h1>About Fiverr</h1>
      <p1>
        Fiverr was founded by Micha Kaufman and Shai Wininger, and was launched
        in February 2010. The founders came up with the concept of a marketplace
        that would provide a two sided platform for people to buy and sell a
        variety of digital services typically offered by freelance contractors.
        Services offered on the site include writing, translation, graphic
        design, video editing and programming.[4][5][6] Fiverr's services start
        at US$5, and can go up to thousands of dollars with gig extras. Each
        service offered is called a "gig".[7] The website was launched in early
        2010 and by 2012 was hosting over 1.3 million Gigs.[8] The website
        transaction volume has grown 600% since 2011. Additionally, Fiverr.com
        has been ranked among the top 100 most popular sites in the United
        States and top 200 in the world since the beginning of 2013.[9] On June
        1, 2010, Fiverr received a seed investment of US$1 million from Guy
        Gamzu and other angel investors, and in May 2012, Fiverr secured US$15
        million in funding from Accel Partners and Bessemer Venture Partners,
        bringing the company's total funding to US$20 million.[3]
      </p1>
    </div>
  );
}

export default AboutSection;
