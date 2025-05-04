"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Container, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import Typewriter from "./typewriter";

const handleScroll = (link: string) => {
  const target = document.querySelector(link);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const header = Array.from("By Caleb Vergene");

const Hero = () => {
  const [init, setInit] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });

    const img = new Image();
    img.src = "/hero-bg.png";
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageLoaded(true);
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        image: "url('/hero-bg.png')",
        size: "cover",
        position: "center",
        repeat: "no-repeat",
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: {
              enable: true,
              force: 60,
              smooth: 10
            }
          },
          resize: {
            delay: 0.0,
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          enable: true,
          outModes: {
            default: "bounce",
          },
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          value: 150,
          density: {
            enable: true,
            width: 1920,
            height: 980,
          },
        },
        opacity: {
          value: { min: 0, max: 1 },
          animation: {
            enable: true,
            startValue: "min",
            speed: 0.3,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
      },
      pauseOnBlur: true,
    }),
    []
  );

  return (
    <div className="relative h-[90vh]" id="home">
      {init && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 2s ease-in-out",
            backgroundColor: "#141417",
          }}
        >
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center">
        <div className="overflow-hidden">
          {header.map((header, index) => (
            <motion.span 
              key={index}
              className="lg:text-9xl md:text-7xl text-6xl text-white font-bold"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.1 + index * 0.03
              }}
              style={{ 
                display: 'inline-block',
                whiteSpace: 'pre'
              }}
            >
              {header}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap justify-center text-gray-200 font-bold font-Epilogue mt-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.25,
          }}
        >
          <span className="mr-2 lg:text-5xl md:text-4xl text-2xl text-white font-bold font-Epilogue">
            Who owns the 
          </span>
          <Typewriter />
        </motion.div>
        
        <motion.div
          onClick={() => handleScroll("#contact")}
          className="flex items-center px-6 py-2.5 font-Epilogue bg-neutral-800 text-white/90 hover:text-white rounded-full transition-colors group cursor-pointer mt-10"
          whileHover={{ 
            scale: 1.05
          }}
          transition={{
            scale: {
              duration: 0.1,
              delay: 0,
              type: "tween"
            },
            y: {
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.40
            },
            opacity: {
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.40
            }
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <span className="lg:text-xl text-lg">Try spam clicking!</span>
          <motion.div
            className="ml-2 w-8 h-8 rounded-full bg-transparent flex items-center justify-center overflow-hidden group-hover:bg-white/20"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-text-light group-hover:text-text-light group-hover:-rotate-45 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;