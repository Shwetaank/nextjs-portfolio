"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Types for links
type LinkItem = { name: string; href: string };
type SocialLinkItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

const footerLinks: LinkItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const socialLinks: SocialLinkItem[] = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
];

// Reusable Component for List Items
const LinkList: React.FC<{ links: LinkItem[] }> = ({ links }) => (
  <ul className="space-y-2">
    {links.map((link) => (
      <motion.li
        key={link.name}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          href={link.href}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {link.name}
        </Link>
      </motion.li>
    ))}
  </ul>
);

// Reusable Component for Social Icons
const SocialIcons: React.FC<{ links: SocialLinkItem[] }> = ({ links }) => (
  <div className="flex space-x-4 mt-4 md:mt-0">
    {links.map((link) => (
      <motion.a
        key={link.name}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <link.icon className="h-5 w-5" />
        <span className="sr-only">{link.name}</span>
      </motion.a>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signed up with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Your Logo
            </Link>
            <p className="mt-4 text-muted-foreground">
              Crafting digital experiences with passion and precision.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <LinkList links={footerLinks} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-r-none"
                  required
                />
                <Button type="submit" className="rounded-l-none">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe to newsletter</span>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <SocialIcons links={socialLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
