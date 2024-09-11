"use client";
import React, { useState, useEffect } from "react";

const HoverParagraph = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    // Check if window is defined to avoid SSR issues
    if (typeof window !== "undefined") {
      // Set initial mobile state based on window width
      setIsMobile(window.innerWidth <= 1200);

      // Add event listener for resize
      window.addEventListener("resize", handleResize);

      return () => {
        // Cleanup: remove event listener
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const toggleVisibility = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter((prev: boolean) => !prev);
  };

  return (
    <div className="hoverpage bg-[#3C130E] xl:bg-transparent md:border-t-2 md:border-b-2 border-[#3C130E]">
      <div
        className={`hover-container ${hovered ? "visible" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className={`hover-word ${
            isMobile ? "hovered" : hovered ? "hovered" : ""
          }`}
        >
          MISSION
        </span>
        <p
          className={`hover-paragraph ${
            hovered ? "visible" : ""
          } md:text-2xl lg:text-lg`}
        >
         At Smart Collar, our mission is to revolutionize pet care with advanced technology. We enhance the lives of pets and their owners by providing real-time insights into health, well-being, and daily activities. Our smart collar integrates with your home ecosystem, offering automated feeding, precise tracking of hunger and thirst, calorie monitoring, and AI-driven diet plans. We aim to empower owners with the information needed to ensure a healthier, happier life for their furry companions.
        </p>
      </div>
      <div
        className={`hover-container2 ${hovered2 ? "visible2" : ""}`}
        onMouseEnter={() => setHovered2(true)}
        onMouseLeave={() => setHovered2(false)}
      >
        <span
          className={`hover-word ${
            isMobile ? "hovered" : hovered2 ? "hovered" : ""
          }`}
        >
          VISION
        </span>
        <p
          className={`hover-paragraph2 ${
            hovered2 ? "visible2" : ""
          } md:text-2xl lg:text-lg`}
        >
          Our vision is to be the leading innovator in pet care technology, setting new standards for the health and well-being of pets worldwide. We envision a future where every pet benefits from intelligent, connected solutions that enhance their quality of life and deepen the bond between pets and their owners. By continuously advancing our technology and expanding our solutions, we aim to make exceptional pet care accessible and intuitive for everyone.
        </p>
      </div>
    </div>
  );
};

export default HoverParagraph;
