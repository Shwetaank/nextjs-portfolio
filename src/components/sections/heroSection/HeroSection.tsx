"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Folder } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import data from "@/components/sections/heroSection/data";
import { Cover } from "@/components/ui/cover";

interface TypewriterEffectProps {
  words: string[];
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ words }) => {
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      {subIndex === words[index].length ? "" : "|"}
    </span>
  );
};

const HeroSection: React.FC = () => {
  const words: string[] = [
    "💻 Software Engineer",
    "🌐 Full-Stack Developer",
    "⚛️ React Native Expert",
    "☕ Java Developer",
    "🐹 Golang Developer",
    "📦 Next.js Specialist",
    "🔙 Backend Expert",
  ];
  const text: string = `Hi there! I'm Shwetank Morey, a Freelance MERN Stack Developer with a passion for Java ☕, Golang 🐹, and React Native ⚛️. I'm excited to explore the dynamic world of Web 3.0 🌐 and Blockchain technology ⛓️. With a solid background in Data Structures and Algorithms (DSA) 📊, I'm here to craft efficient and scalable solutions. Let's collaborate to turn your ideas into reality! 🚀`;

  const [isPaused, setIsPaused] = useState(false);
  const [radius, setRadius] = useState(250);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 640 ? 150 : 250);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden px-4 py-16 bg-transparent">
      {/* Left Section for Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 text-center mb-12 mt-12 lg:mb-0 lg:mt-12 space-y-6"
      >
        <h1 className="text-6xl font-semibold mb-3">
          Hello, I&apos;m
          <span className="ml-2">
            <Cover
              className="text-7xl lg:text-8xl font-semibold bg-clip-text text-transparent 
              bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 cursor-pointer"
            >
              Shwetank
            </Cover>
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          <TypewriterEffect words={words} />
        </h2>
        <div className="text-justify mb-3">
          <TextGenerateEffect words={text} />
        </div>

        <div className="flex gap-8 justify-center mt-8">
          <Link href="#contact">
            <motion.button
              className="flex items-center gap-4 border-2 border-primary text-primary font-semibold py-2 px-6 rounded-full shadow-md transition-transform transform bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 hover:bg-white hover:text-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="h-6 w-6 duration-400"
                whileHover={{
                  rotate: 360,
                  scale: 1.7,
                }}
                transition={{ duration: 0.5 }}
              >
                <MessageCircle className="h-full w-full" />
              </motion.div>
              <span className="text-base">Contact Me</span>
            </motion.button>
          </Link>

          <Link href="#portfolio">
            <motion.button
              className="flex items-center gap-4 border-2 border-gray-400 bg-transparent font-semibold py-2 px-6 rounded-full shadow-md transition-transform transform hover:bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="h-6 w-6 duration-300"
                whileHover={{
                  rotate: 360,
                  scale: 1.7,
                }}
                transition={{ duration: 0.5 }}
              >
                <Folder className="h-full w-full" />
              </motion.div>
              <span className="text-base">My Portfolio</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Right Section for Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 flex justify-center items-center relative"
      >
        <div className="relative w-64 h-64 lg:w-96 lg:h-96">
          <Image
            src="/logo.jpg?height=500&width=500"
            alt="Shwetank's portrait"
            fill
            className="rounded-full object-cover shadow-3xl"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </div>

        {/* Circular Social Links */}
        <div className="absolute inset-0 hidden xl:flex items-center justify-center">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: isPaused ? 0 : 360 }}
            transition={{
              duration: 50,
              ease: [0.25, 0.1, 0.25, 1],
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {data.map(
              ({ id, link, icon: Icon, labelName, hoverColor }, index) => {
                const angle = (index / data.length) * (2 * Math.PI);
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <motion.a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Link to my ${labelName} profile`}
                    className="absolute flex items-center justify-center transition-transform duration-300 transform hover:scale-125"
                    title={labelName}
                    style={{
                      left: `calc(50% + ${x}px - 20px)`,
                      top: `calc(50% + ${y}px - 20px)`,
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <Icon
                      className="h-6 w-6 text-primary transition-colors duration-300"
                      style={{ transition: "color 0.3s ease" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = hoverColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "currentColor")
                      }
                    />
                  </motion.a>
                );
              }
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <Link href="#about">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex justify-center items-center"
        >
          <AnimatePresence>
            <motion.div
              key="scroll-indicator"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "reverse",
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-10 h-14 border-2 border-primary rounded-full flex justify-center cursor-pointer"
              >
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-2 h-4 bg-primary rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Link>
    </section>
  );
};

export default HeroSection;
