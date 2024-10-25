import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Code,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LucideProps,
  Twitter,
  Youtube,
  Dribbble,
} from "lucide-react";

interface SocialMediaLink {
  id: number;
  link: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  labelName: string;
  hoverColor: string; 
}

const data: SocialMediaLink[] = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/shwetank-morey-a35484257",
    icon: Linkedin,
    labelName: "LinkedIn",
    hoverColor: "#0e76a8", // LinkedIn blue
  },
  {
    id: 2,
    link: "https://www.facebook.com/spmorey",
    icon: Facebook,
    labelName: "Facebook",
    hoverColor: "#1877f2", // Facebook blue
  },
  {
    id: 3,
    link: "https://www.instagram.com/shwetaank_/",
    icon: Instagram,
    labelName: "Instagram",
    hoverColor: "#e1306c", // Instagram pink
  },
  {
    id: 4,
    link: "https://x.com/Sin_Greed___",
    icon: Twitter,
    labelName: "Twitter",
    hoverColor: "#1da1f2", // Twitter blue
  },
  {
    id: 5,
    link: "https://github.com/Shwetaank",
    icon: Github,
    labelName: "GitHub",
    hoverColor: "#f89f1b",
  },
  {
    id: 6,
    link: "https://leetcode.com/spmorey87/",
    icon: Code,
    labelName: "LeetCode",
    hoverColor: "#f89f1b", // LeetCode orange
  },
  {
    id: 7,
    link: "https://www.youtube.com/@Sin_Greed",
    icon: Youtube,
    labelName: "YouTube",
    hoverColor: "#ff0000", // YouTube red
  },
  {
    id: 8,
    link: "https://dribbble.com/Sin__Greed",
    icon: Dribbble,
    labelName: "Dribbble",
    hoverColor: "#ea4c89", // Dribbble pink
  },
];

export default data;
