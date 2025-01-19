"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { advertisementBannerImageUrls } from "@/lib/constants";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const AdvertisementBannersComponent = () => {
  return (
    <div className="w-full min-h-[250px]">
      <Carousel
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="h-full w-full !m-0">
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <CarouselItem key={index} className="w-full h-full !p-0">
                <Image
                  src={advertisementBannerImageUrls[index]}
                  alt={"img " + index.toString()}
                  width={0}
                  height={0}
                  unoptimized
                  quality={100}
                  className="h-[250px] w-full object-cover"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AdvertisementBannersComponent;
