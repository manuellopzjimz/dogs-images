import React from "react";
import Lottie from "react-lottie";

import Animation from "./loading-animation.json";

export const Loading = () => {
  return (
    <Lottie
      height={400}
      width={400}
      options={{
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
    />
  );
};
