'use client';
import { useState, useEffect } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';  // For animations

const Services = () => {
  const services = [
    {
      title: 'GPS Tracking',
      description: 'Track your dog\'s location in real-time to ensure their safety wherever they are.',
      animationSrc: "gps.json"
    },
    {
      title: 'Temperature Monitoring',
      description: 'Monitor your dog\'s body temperature and prevent heat stress or cold exposure.',
      animationSrc: "temperature.json"
    },
    {
      title: 'Sleep Monitoring',
      description: 'Analyze your dog\'s sleep quality and patterns to ensure they get enough rest.',
      animationSrc: "sleeping.json"
    },
    {
      title: 'Step Count',
      description: 'Keep track of your dog\'s daily steps and ensure they meet their activity goals.',
      animationSrc: "walking.json"
    },
    {
      title: 'Heart Rate Monitoring',
      description: 'Check your dog\'s heart rate to monitor their overall health and well-being.',
      animationSrc: "heartt.json"
    },
    {
      title: 'Geo fensing',
      description: 'Set safe zones and get alerts if your dog goes beyond them, for extra peace of mind.',
      animationSrc: "geo.json"
    }
  ];

  const [currentSet, setCurrentSet] = useState(0); // Tracks which set is displayed
  const totalSets = Math.ceil(services.length / 3); // Number of sets (2 sets of 3 services)
  const autoScrollDelay = 2000; // 8 seconds delay

  // Group services into sets of 3
  const serviceGroups = [];
  for (let i = 0; i < services.length; i += 3) {
    serviceGroups.push(services.slice(i, i + 3));
  }

  // Auto-scroll function to increment the current set
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
    }, autoScrollDelay);

    return () => clearInterval(autoScroll); // Clean up the interval
  }, []);

  // Scroll left to the previous set
  const scrollLeft = () => {
    setCurrentSet((prevSet) => (prevSet - 1 + totalSets) % totalSets);
  };

  // Scroll right to the next set
  const scrollRight = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
  };

  return (
    <div className="flex flex-col justify-center items-center px-2 md:px-[3rem] m-5 md:m-10 mb-9 min-h-[90vh]" id="our-services">
      <div className="w-full flex flex-col justify-center items-start space-y-4">
        <h1 className="text-5xl w-[50%] md:text-8xl text-[#3C130E] font-nohemi">Our Services</h1>
        <p className="text-md md:text-2xl lg:text-xl p-2 font-neue">
          Discover a wide range of features designed to ensure your dog's health, safety, and well-being.
        </p>
      </div>

      <div className="relative w-full flex justify-center items-center mt-10">
        {/* Left Arrow */}
        <button className="absolute left-0 text-3xl p-3 bg-white shadow-md rounded-full" onClick={scrollLeft}>
          <FaArrowLeft />
        </button>

        {/* Service Display */}
        <div className="flex flex-row justify-around w-full">
          {serviceGroups[currentSet].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center items-center m-2 space-y-4"
            >
              <div className="bg-[#fbead8] h-[12rem] w-[10rem] md:h-[25rem] md:w-[22rem] p-2 md:p-8 flex justify-center items-center rounded-tl-[3rem] rounded-br-[3rem] shadow-xl">
                <DotLottiePlayer src={service.animationSrc} loop autoplay />
              </div>
              <h2 className="text-2xl md:text-4xl text-[#3C130E] font-nohemi">{service.title}</h2>
              <div className="text-center font-neue md:text-lg lg:text-md">
                {service.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 text-3xl p-3 bg-white shadow-md rounded-full" onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Services;
