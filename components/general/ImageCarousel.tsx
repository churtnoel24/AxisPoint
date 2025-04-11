"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageCarouselProps {
  imageUrls: string[];
}

function NextArrow({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
    >
      <ArrowRight className="w-6 h-6 text-black" />
    </div>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
    >
      <ArrowLeft className="w-6 h-6 text-black" />
    </div>
  );
}

export default function ImageCarousel({ imageUrls }: ImageCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    adaptiveHeight: true, // <-- this is the key
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // hide on mobile
        },
      },
    ],
  };

  return (
    <div className="relative mb-8 overflow-hidden rounded-lg">
      <Slider {...settings}>
        {imageUrls.map((url, i) => (
          <div key={i}>
            <Image
              src={url}
              alt={`Image ${i + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
