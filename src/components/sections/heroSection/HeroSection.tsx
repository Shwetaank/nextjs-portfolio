"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Folder, ChevronDown } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import data from "@/components/sections/heroSection/data";

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
    <span className="text-primary hover:underline cursor-pointer ">
      {words[index].substring(0, subIndex)}
      {subIndex === words[index].length ? "" : "|"}
    </span>
  );
};

const HeroSection: React.FC = () => {
  const words: string[] = [
    "👨‍💻 Software Engineer",
    "🌐 Full-Stack Developer",
    "⚛️ React Native Expert",
    "☕ Java Enthusiast",
    "🐹 Golang Developer",
    "📦 Next.js Specialist",
    "🔙 Backend Expert",
  ];
  const text: string = `Welcome! I’m Shwetank Morey, a Freelance MERN Stack Developer with expertise in 🌟 Java, 🐹 Golang, and ⚛️ React Native. I am also exploring the cutting-edge world of 🌐 Web 3.0 and ⛓️ Blockchain technology. Proficient in 📊 Data Structures and Algorithms (DSA), I deliver efficient and scalable solutions. Let's bring your ideas to life! 🚀✨`;
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text and CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 text-left mb-12 lg:mb-0"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            Hello, I&apos;m{" "}
            <motion.span
              className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-600 to-blue-500"
              style={{
                backgroundSize: "200% 200%",
                display: "inline-block",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Shwetank
            </motion.span>
          </h1>
          <h2 className="text-2xl lg:text-4xl font-semibold text-muted-foreground mb-8 mt-8 ">
            <TypewriterEffect words={words} />
          </h2>
          <div className="text-muted-foreground text-justify mb-8">
            <TextGenerateEffect words={text} />
          </div>
          {/* CTA Button Section */}
          <div className="flex space-x-20 justify-center">
            <Link href="#contact">
              <Button
                variant="default"
                size="lg"
                className="relative rounded-full border-2 border-red-500 text-red-500 bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 hover:bg-red-500 hover:text-white hover:shadow-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Let&apos;s Talk
              </Button>
            </Link>

            <Link href="#portfolio">
              <Button
                variant="outline"
                size="lg"
                className="relative rounded-full border-2 border-purple-500 text-purple-500 bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 hover:bg-purple-500 hover:text-white hover:shadow-xl"
              >
                <Folder className="mr-2 h-5 w-5" />
                My Work
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Image & Circular Social Links for xl and larger screens */}
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
              className="absolute inset-0 rounded-full bg-primary/20"
              animate={{ scale: [1, 1.07, 1] }}
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
                  const radius = 250;

                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);

                  return (
                    <motion.a
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Link to my ${labelName}`}
                      className="absolute items-center justify-center transition-transform duration-300 transform hover:scale-125 xl:flex hidden"
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
                        className="h-6 w-6 text-primary"
                        style={{
                          transition: "color 0.3s ease",
                        }}
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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
          >
            <ChevronDown className="h-8 w-8 text-primary" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default HeroSection;
