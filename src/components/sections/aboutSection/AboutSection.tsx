"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Rocket,
  Server,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const aboutData = [
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
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Education",
    desc: "B.Tech Mechanical",
  },
];

const skills = [
  {
    name: "React",
    icon: <Code className="h-4 w-4" />,
    color: "bg-blue-500",
    level: 90,
  },
  {
    name: "Node.js",
    icon: <Server className="h-4 w-4" />,
    color: "bg-green-500",
    level: 85,
  },
  {
    name: "Full Stack",
    icon: <Rocket className="h-4 w-4" />,
    color: "bg-purple-500",
    level: 88,
  },
];

const AboutMeSection: React.FC = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section className="reletive py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering digital visions with a touch of magic ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Profile Image */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full overflow-hidden group">
              <CardContent className="p-0 h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/logo.jpg?height=400&width=600"
                    alt="Shwetank Morey"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <p className="text-white text-2xl font-bold">
                      Shwetank Morey
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="col-span-1 md:col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Full Stack Engineer & Freelancer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Greetings! I&apos;m a passionate Full Stack Engineer based in
                  Pune, India. With a unique background in Mechanical
                  Engineering, I&apos;ve embarked on an exciting journey in the
                  world of web development, blending creativity with
                  cutting-edge technology to deliver exceptional digital
                  solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="col-span-1 md:col-span-3 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            setExpandedSkill(
                              expandedSkill === skill.name ? null : skill.name
                            )
                          }
                        >
                          <Badge
                            variant="secondary"
                            className={`${skill.color} text-white cursor-pointer p-2`}
                          >
                            {skill.icon}
                            <span className="ml-2">{skill.name}</span>
                            {expandedSkill === skill.name ? (
                              <ChevronUp className="ml-2 h-4 w-4" />
                            ) : (
                              <ChevronDown className="ml-2 h-4 w-4" />
                            )}
                          </Badge>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click to see more details</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </CardContent>
              <AnimatePresence>
                {expandedSkill && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <p className="text-muted-foreground mb-2">
                        Proficiency in {expandedSkill}
                      </p>
                      <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${
                              skills.find((s) => s.name === expandedSkill)
                                ?.level
                            }%`,
                          }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        />
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

          {/* Stats */}
          {aboutData.map((item, index) => (
            <motion.div
              key={item.id}
              className="col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center h-full p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-primary mb-2"
                  >
                    {item.icon}
                  </motion.div>
                  <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                  <CardDescription className="text-center">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Download CV */}
          <motion.div
            className="col-span-1 md:col-span-3 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto text-lg py-6 px-8">
                    Download CV <Download className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
