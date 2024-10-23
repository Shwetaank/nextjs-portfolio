"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import {
  Menu,
  ChevronDown,
  Info,
  Briefcase,
  Clipboard,
  FileText,
  MessageSquare,
  BookOpen,
  HelpCircle,
  Award,
  Quote,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import Image from "next/image";

type NavItemType = { name: string; href: string; icon?: React.ReactNode };

const mainNavItems: NavItemType[] = [
  { name: "About", href: "/#about", icon: <Info /> },
  { name: "Education", href: "/#education", icon: <BookOpen /> },
  { name: "Services & Skills", href: "/#services-skills", icon: <Clipboard /> },
  { name: "Portfolio", href: "/#portfolio", icon: <Briefcase /> },
  { name: "Contact", href: "/#contact", icon: <MessageSquare /> },
];

const moreNavItems: NavItemType[] = [
  { name: "Blog", href: "/#blog", icon: <FileText /> },
  { name: "Certifications", href: "/#certifications", icon: <Award /> },
  { name: "Testimonials", href: "/#testimonials", icon: <Quote /> },
  { name: "FAQ", href: "/#faq", icon: <HelpCircle /> },
];

const motionSettings = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, type: "spring", stiffness: 100 },
};

export default function Component() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { setTheme, theme = "dark" } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {});

  return (
    <motion.nav
      {...motionSettings}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3 border-b-2 border-b-gray-500 dark:border-b-gray-300 rounded-b-full shadow-2xl bg-background/10 backdrop-blur-2xl"
    >
      <div className="mx-auto flex items-center justify-between px-6">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-10">
          <AnimatedLogo />
          <AnimatedTitle />
        </Link>

        <div className="hidden xl:flex space-x-8 items-center">
          {renderNavItems(mainNavItems, pathname, theme, setIsOpen)}
          <ExploreMoreDropdown setIsOpen={setIsOpen} />
          <ThemeToggleButton theme={theme} setTheme={setTheme} />
        </div>

        <div className="flex items-center space-x-8 xl:hidden">
          <ThemeToggleButton theme={theme} setTheme={setTheme} />
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pathname={pathname}
            theme={theme}
          />
        </div>
      </div>
    </motion.nav>
  );
}

const AnimatedLogo = () => (
  <motion.div
    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
    animate={{ opacity: 1, rotate: 0, scale: 1 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.4, rotate: 360, transition: { duration: 0.5 } }}
    whileTap={{ scale: 0.9 }}
  >
    <Image
      src="/logo.jpg"
      alt="Your Logo"
      width={40}
      height={50}
      className="rounded-full"
    />
  </motion.div>
);

const AnimatedTitle = () => (
  <motion.span
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    whileHover={{
      scale: 1.1,
      rotate: 5,
      background: "linear-gradient(to right, #EF4444, #A855F7)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
    className="sm:text-xl md:text-3xl font-semibold text-red-400"
    style={{
      letterSpacing: "4px",
      background: "linear-gradient(to right, #EF4444, #A855F7)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    Shwetank
  </motion.span>
);

const ExploreMoreDropdown: React.FC<{
  setIsOpen: (state: boolean) => void;
}> = ({ setIsOpen }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="outline" className="flex items-center">
          Explore More <ChevronDown className="ml-1 h-4 w-6" />
        </Button>
      </motion.div>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      className="bg-background/80 backdrop-blur-lg"
    >
      {renderNavItems(moreNavItems, usePathname(), "", setIsOpen)}
    </DropdownMenuContent>
  </DropdownMenu>
);

const renderNavItems = (
  items: NavItemType[],
  pathname: string,
  theme: string,
  setIsOpen?: (state: boolean) => void
) =>
  items.map((item, index) => (
    <NavItem
      key={item.name}
      item={item}
      index={index}
      pathname={pathname}
      theme={theme}
      setIsOpen={setIsOpen}
    />
  ));

const ThemeToggleButton: React.FC<{
  theme: string;
  setTheme: (theme: string) => void;
}> = ({ theme, setTheme }) => (
  <motion.div
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.1, rotate: 180 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="flex items-center justify-center"
  >
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center p-2 border rounded-full transition-colors duration-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -180 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? (
            <Moon className="text-gray-900 dark:text-gray-100" />
          ) : (
            <Sun className="text-gray-900 dark:text-gray-100" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </button>
  </motion.div>
);

const MobileMenu: React.FC<{
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  pathname: string;
  theme: string;
}> = ({ isOpen, setIsOpen, pathname, theme }) => {
  return (
    <div className="xl:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-background/80"
            >
              <Menu />
              <span className="sr-only">Open Menu</span>
            </Button>
          </motion.div>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle
              className="text-left text-2xl lg:text-4xl font-semibold mb-2"
              style={{
                background: "linear-gradient(to right, #EF4444, #A855F7)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Navigation
            </SheetTitle>
            <SheetDescription>
              🌟 Explore the sections of my portfolio ✨
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            {renderNavItems(mainNavItems, pathname, theme, setIsOpen)}
            {renderNavItems(moreNavItems, pathname, theme, setIsOpen)}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const NavItem: React.FC<{
  item: NavItemType;
  index: number;
  pathname: string;
  theme: string;
  setIsOpen?: (state: boolean) => void;
}> = ({ item, setIsOpen }) => {
  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(false); 
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Link
        href={item.href}
        aria-label={item.name}
        className="flex items-center space-x-4 px-4 py-2 font-medium transition-all duration-300 group"
        onClick={handleClick} 
      >
        {item.icon && (
          <motion.span
            className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:scale-120 group-hover:text-red-600"
            whileHover={{ scale: 1.5, rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            {item.icon}
          </motion.span>
        )}

        <motion.span
          className="transition-colors duration-300 ease-in-out font-semibold group-hover:text-transparent group-hover:bg-clip-text bg-gradient-to-r from-red-400 to-purple-600 bg-clip-text"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {item.name}
        </motion.span>
      </Link>
    </div>
  );
};
