import React from "react";
import backgroundFrontpage from "../../assets/img/yurei_frontpage_background.png";

function Home() {
  return (
    <div className="relative h-[88vh] -z-10">
      <img
        src={backgroundFrontpage}
        alt="background"
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default Home;
