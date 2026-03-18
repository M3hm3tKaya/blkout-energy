"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function GlitchText({ text, className, delay = 0 }: GlitchTextProps) {
  const [displayed, setDisplayed] = useState<string>("");
  const [fixedCount, setFixedCount] = useState(0);
  const [started, setStarted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getRandomChar = useCallback(() => {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }, []);

  // Start after delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  // Initialize with random characters
  useEffect(() => {
    if (!started) {
      setDisplayed("");
      return;
    }
    const initial = text
      .split("")
      .map((ch) => (ch === " " ? " " : getRandomChar()))
      .join("");
    setDisplayed(initial);
    setFixedCount(0);
  }, [started, text, getRandomChar]);

  // Fix one character at a time every 50ms
  useEffect(() => {
    if (!started) return;
    if (fixedCount >= text.length) {
      setDisplayed(text);
      return;
    }

    intervalRef.current = setInterval(() => {
      setFixedCount((prev) => {
        const next = prev + 1;
        if (next >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return next;
      });
    }, 50);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [started, text]);

  // Update displayed text based on fixedCount
  useEffect(() => {
    if (!started) return;
    const chars = text.split("").map((ch, i) => {
      if (ch === " ") return " ";
      if (i < fixedCount) return ch;
      return getRandomChar();
    });
    setDisplayed(chars.join(""));
  }, [fixedCount, text, started, getRandomChar]);

  if (!started) return <span className={clsx(className, "opacity-0")}>{text}</span>;

  return <span className={clsx(className)}>{displayed}</span>;
}
