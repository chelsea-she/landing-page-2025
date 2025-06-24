"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import useHasMounted from "@/lib/useHasMounted";

export function Navbar() {
  const hasMounted = useHasMounted();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (!hasMounted) return null;

  const title = "<cs />";

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            chelsea's landing page
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="#intro"
              className="p-2 text-sm font-medium hover:text-foreground hover:bg-app-gray-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="p-2 text-sm font-medium hover:text-foreground hover:bg-app-gray-100 transition-colors"
            >
              About
            </Link>
            <Link
              href="#work"
              className="p-2 text-sm font-medium hover:text-foreground hover:bg-app-gray-100 transition-colors"
            >
              Work
            </Link>
            <Link
              href="#contact"
              className="p-2 text-sm font-medium hover:text-foreground hover:bg-app-gray-100 transition-colors"
            >
              Contact
            </Link>

            {/* Light/Dark Toggle */}
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 ml-3 rounded hover:bg-app-gray-100 transition"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            <Button
              asChild
              className="p-2 rounded hover:bg-app-gray-100 transition"
            >
              <a href="/chelsea_resume.pdf" download="Chelsea_She_2025.pdf">
                download resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-md hover:bg-app-gray-50 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="border-b border-gray-200">
                <SheetTitle>{title}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-2 mt-8">
                <Link
                  href="#intro"
                  className="text-md font-medium hover:text-foreground transition-colors py-3 px-4 rounded-md hover:bg-app-gray-50"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-md font-medium hover:text-foreground transition-colors py-3 px-4 rounded-md hover:bg-app-gray-50"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="#work"
                  className="text-md font-medium hover:text-foreground transition-colors py-3 px-4 rounded-md hover:bg-app-gray-50"
                  onClick={closeMobileMenu}
                >
                  Work
                </Link>
                <Link
                  href="#contact"
                  className="text-md font-medium hover:text-foreground transition-colors py-3 px-4 rounded-md hover:bg-app-gray-50"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-sm">Switch Theme</p>
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="p-2 ml-3 rounded hover:bg-app-gray-100 transition"
                    aria-label="Toggle Theme"
                  >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </Button>
                </div>

                <div className="flex items-center justify-center">
                  <Button asChild className="p-2 hover:bg-app-gray-100">
                    <a
                      href="/chelsea_resume.pdf"
                      download="Chelsea_She_Resume_2025.pdf"
                      rel="noopener noreferrer"
                    >
                      download resume
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
