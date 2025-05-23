import React, { useEffect, useState, useMemo } from 'react';

const Typewriter: React.FC = () => {
  const words = useMemo(() => ["night sky?    ", "near-earth space?    "], []);

  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const current = words[loopIndex];
      if (isDeleting) {
        setCurrentWord(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setLoopIndex((loopIndex + 1) % words.length);
        }
      } else {
        setCurrentWord(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === current.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingTimeout = setTimeout(handleType, 100);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, loopIndex, words]);

  return (
    <div className="flex items-center">
      <h1 className="lg:text-5xl md:text-4xl text-2xl text-gray-200 font-bold font-Epilogue">
        <span id="typewriter" className="text-[#218d5b]">{currentWord}</span>
        <span className="blinking-cursor sm:tex">|</span>
      </h1>
    </div>
  );
};

export default Typewriter;