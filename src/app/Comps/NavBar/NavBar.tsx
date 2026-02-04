"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 8;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = `fixed top-0 z-50 w-full px-[6vw] py-4 transition duration-300 ${
    scrolled
      ? "bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(11,26,43,0.12)]"
      : "bg-transparent"
  }`;

  const ctaClass = `rounded-full px-3 py-2 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
    scrolled
      ? "bg-accent text-white hover:bg-accent-strong"
      : "border border-ink-900/15 bg-white/70 text-ink-900 hover:bg-white"
  }`;

  return (
    <nav className={navClass}>
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4">
        <Link
          href="#home"
          className="flex items-center gap-3 font-display text-base font-semibold tracking-[0.02em] text-ink-900"
        >
          <Image
            src="/BsLogoSimpleDark.svg"
            width={96}
            height={96}
            alt="Blue Sky Industrial Solutions"
            className="h-7 w-auto"
          />
          <span className="hidden text-base sm:inline">Blue Sky</span>
        </Link>
        <div className="flex items-center gap-3 text-sm font-medium text-ink-900 sm:gap-4">
          <div className="hidden items-center gap-4 sm:flex">
            <Link className="transition hover:text-ink-700" href="#home" scroll={true}>
              Home
            </Link>
            <Link className="transition hover:text-ink-700" href="#about" scroll={true}>
              About
            </Link>
            <Link className="transition hover:text-ink-700" href="#contact" scroll={true}>
              Contact
            </Link>
          </div>
          <Link className={ctaClass} href="#contact" scroll={true}>
            Start a project
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
