import React from "react";
import { useTheme } from "./ThemeContext";
import "./Aboutcss/Home.css";

const Home = () => {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const items = [
    {
      title: "Online dori haridi",
      content:
        "Siz sizga belgilangan kasallik malumotlaringizga ko'ra ro'yhat bo'yicha dorilar o'z vaqtida yetkaziladi yan siz dori honalardan dorilarni izlap ortiqcha harakat qilishingiz shart emas biz sizga barcha kerak li maxsulotlarni yetkazib beramiz",
      backgroundImage: "url('./imgs/tenor.gif')",
      leftImage: "./imgs/dor.webp",
    },
    {
      title: "Page 2",
      content: "Content for Page 2",
      backgroundImage: "url('./imgs/page2-background.jpg')",
      leftImage: "./imgs/tenor.gif",
    },
    {
      title: "Page 3",
      content: "Content for Page 3",
      backgroundImage: "url('./imgs/page3-background.jpg')",
      leftImage: "./imgs/tenor.gif",
    },
    {
      title: "Page 4",
      content: "Content for Page 4",
      backgroundImage: "url('./imgs/page4-background.jpg')",
      leftImage: "./imgs/tenor.gif",
    },
    {
      title: "Page 5",
      content: "Content for Page 5",
      backgroundImage: "url('./imgs/page5-background.jpg')",
      leftImage: "./imgs/tenor.gif",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ backgroundImage: items[currentIndex].backgroundImage }}
      >
        <div
          className={`slide-content2 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } ${isDarkMode ? "blurred" : ""}`}
        >
          <div className="text-content">
            <h1 className="text-2xl font-bold mb-3">
              {items[currentIndex].title}
            </h1>
            <p className="text-2xl">{items[currentIndex].content}</p>
            <div className="buttons mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
                Learn More
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Full Details
              </button>
            </div>
          </div>
          <div className="img-content">
            <img
              src={items[currentIndex].leftImage}
              alt="Left Decorative"
              className="left-image"
            />
          </div>
        </div>
      </div>
      <button
        className="carousel-button left"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        className="carousel-button right"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default Home;
