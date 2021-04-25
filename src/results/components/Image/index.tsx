import React, { useEffect, useRef, useState } from "react";

import { StyledImage, Loader } from "./style";

type Props = {
  url: string;
  alternativeText: string;
};

export const Image = (props: Props) => {
  const [canDisplayImage, setFlag] = useState<boolean>(false);
  const image = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFlag(true);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 1.0,
    });
    if (image.current !== null) {
      observer.observe(image.current);
    }

    return () => observer.disconnect();
  }, [image.current]);

  return canDisplayImage ? (
    <StyledImage
      src={props.url}
      alt={props.alternativeText}
      width={200}
      height={200}
    />
  ) : (
    <Loader ref={image} />
  );
};
