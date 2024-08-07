import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Aboutcss/Slider.css";
import { useTheme } from "./ThemeContext";

const initialSlides = [
  {
    imgSrc: "./imgs/image.png",
    title: "Kasallikni aniqlash",
    description:
      "Maslahat olish va kasallikni aniqlash davolash choralari o'rganish",
  },
  {
    imgSrc: "./imgs/Dori.png",
    title: "Slide 2",
    description: "Description for Slide 2",
  },
  {
    imgSrc: "./imgs/talkingToDoctor.png",
    title: "Slide 3",
    description: "Description for Slide 3",
  },
  {
    imgSrc: "./imgs/Sog'liq.png",
    title: "Slide 4",
    description: "Description for Slide 4",
  },
  {
    imgSrc: "./imgs/asap.png",
    title: "Slide 5",
    description: "Description for Slide 5",
  },
];

const additionalSlides = [
  {
    imgSrc: "./imgs/ALL.png",
    title: "Additional Slide 1",
    description: "Description for Additional Slide 1",
  },
  {
    imgSrc: "./imgs/Additional2.png",
    title: "Additional Slide 2",
    description: "Description for Additional Slide 2",
  },
  {
    imgSrc: "./imgs/Additional3.png",
    title: "Additional Slide 3",
    description: "Description for Additional Slide 3",
  },
];

export default () => {
  const { isDarkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`Slider2 ${isDarkMode ? "bg-black" : "bg-white"} ${
        isExpanded ? "expanded" : ""
      }`}
    >
      <h1 className="text-4xl font-bold text-gray-500  mb-6">
        Free Opportunities
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {initialSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content11">
              <img
                src={slide.imgSrc}
                alt="Image description"
                className="slide-image"
              />
              <div className="slide-info">
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-description">{slide.description}</p>
                <button className="slide-button">Foydalanish</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Conditionally render additional slides */}
      </Swiper>{" "}
      {isExpanded &&
        additionalSlides.map((slide, index) => (
          <SwiperSlide key={`additional-${index}`} className="relative">
            <h1 className="text-4xl font-bold text-gray-500  mb-6">
              Paid opportunities
            </h1>
            <div className="slide-content3 flex items-center p-4  rounded-lg shadow-lg">
              <img
                src={slide.imgSrc}
                alt="Image description"
                className="slide-image w-1/3 h-auto object-cover rounded-lg"
              />
              <div className="slide-info2 flex-1 pl-4">
                <h3 className="slide-title text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {slide.title}
                </h3>
                <p className="slide-description text-gray-700 dark:text-gray-300">
                  {slide.description}
                </p>
                <button className="slide-button mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Foydalanish
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      <div className="btn">
        <button onClick={toggleExpansion} className="toggle-button">
          {isExpanded ? "△" : "Pullik imkoniyatlar ⇓"}
        </button>
      </div>
    </div>
  );
};
