"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Award,
  Briefcase,
  User,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

interface AboutData {
  id: number;
  icon: JSX.Element;
  title: string;
  desc: string;
}

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
}

const aboutData: AboutData[] = [
  {
    id: 1,
    icon: <Award className="h-6 w-6" />,
    title: "Experience",
    desc: "3+ Years",
  },
  {
    id: 2,
    icon: <Briefcase className="h-6 w-6" />,
    title: "Projects",
    desc: "20+ Completed",
  },
  {
    id: 3,
    icon: <User className="h-6 w-6" />,
    title: "Clients",
    desc: "10+ Happy",
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="h-7 w-7" />,
    href: "https://github.com/Shwetaank",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="h-7 w-7" />,
    href: "https://www.linkedin.com/in/shwetank-morey-a35484257",
    label: "LinkedIn",
  },
  {
    icon: <Twitter className="h-7 w-7" />,
    href: "https://x.com/Sin_Greed___",
    label: "Twitter",
  },
  {
    icon: <Facebook className="h-7 w-7" />,
    href: "https://www.facebook.com/spmorey",
    label: "Facebook",
  },
  {
    icon: <Youtube className="h-7 w-7" />,
    href: "https://www.youtube.com/@Sin_Greed",
    label: "YouTube",
  },
];

const AboutSection: React.FC = () => {
  // text
  const text: string = `Hello, I'm Shwetank Morey 👋, a committed Full Stack Engineer 💻 based in Pune, India. With a background in Mechanical Engineering ⚙️, I have transitioned into freelancing, where I blend creativity with advanced technology solutions. My dedication to enhancing your online business presence is a priority 🌟, and I strive to add significant value to every project I undertake. For a comprehensive overview of my qualifications and experience, please explore my resume below 📄.`;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className=" mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-semibold bg-clip-text text-transparent 
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-10 mt-5 tracking-tight text-center"
        >
          ⭐ About Me ⭐
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden transform rotate-1"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative h-80 md:h-auto overflow-hidden">
                <Image
                  src="/about.jpg?height=400&width=400"
                  alt="Shwetank Morey"
                  layout="fill"
                  objectFit="fill"
                  className="transition-all duration-300 hover:scale-110"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-between bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700">
                <div>
                  <h3 className="text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4">
                    Full Stack Developer
                  </h3>
                  <div className="text-justify">
                    <TextGenerateEffect words={text} />
                  </div>
                </div>
                <div className="flex justify-center space-x-10 mt-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary hover:text-pink-500 shadow-xl transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
                      aria-label={link.label}
                      rel="noopener noreferrer"
                      target="_blank"
                      whileHover={{ rotate: 15, scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download CV Card */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 flex items-center justify-center transform -rotate-2"
          >
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
              <a href="/my-cv.pdf" download>
                <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-colors py-4 px-10 rounded-full font-bold text-2xl flex items-center space-x-3 shadow-lg">
                  <span className="text-lg">Download CV</span>
                  <Download className="h-7 w-7" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          {aboutData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center transform hover:rotate-3 transition-transform"
            >
              <motion.div
                className="text-pink-500 dark:text-pink-300 mb-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-purple-600 dark:text-purple-300 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
