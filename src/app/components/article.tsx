"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Source } from './source';

const MotionDiv = motion.div || 'div';
const MotionButton = motion.button || 'button';

const Article = () => {

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    // For text reveal on scroll
    const textRevealVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1 }
        }
    };

    // Scroll animation hook
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-[#141417] min-h-screen text-gray-200 font-sans">
            {/* Article content */}
            <MotionDiv
                className="container mx-auto px-5 py-10 max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >
                <MotionDiv variants={textRevealVariants} className="prose prose-lg max-w-none prose-invert">
                    <h1 className="text-4xl font-bold mb-6 text-[#218d5b]">
                        The night sky is getting crowded, and astronomers aren't happy about it.
                    </h1>
                    <p className="text-xl leading-relaxed mb-8 text-gray-200">
                        SpaceX has already launched over 7000+ Starlink satellites, with plans for
                        a launching over 30,000 by 2030. And they're not alone. Amazon, OneWeb, and
                        others are joining the satellite party too.                     <button className='text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-3xl italic'><a href="https://spacenews.com/spacex-submits-paperwork-for-30000-more-starlink-satellites/">Space News</a></button>

                    </p>
                    <MotionDiv
                        variants={fadeIn}
                        className="my-12 rounded-lg overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/sat-streaks.jpg"
                            alt="SAT Streaks Visualization"
                            width={800}
                            height={450}
                            className="w-full h-auto"
                        />
                        <div className="text-sm text-neutral-400 flex text-center">
                            &quot;Satellites Behind Pinnacles&quot; - Astrophotographer Joshua Rozelis captures 2 hours worth of Low-Earth Orbit Satellite Streaks over Nambung National Park in Western Australia.
                        </div>
                    </MotionDiv>
                    <p className="text-xl leading-relaxed mb-8 text-gray-200">
                        These satellites create bright streaks across telescope
                        images, ruining observations. When astronomers try to capture pictures galaxies
                        or distant asteroids, these satellites photobomb their pictures leaving a streak appearance in the picture. Some of these
                        satellites are literally visible to the naked eye. First-gen Starlinks had a
                        brightness of +5.1 magnitude, which is considered extremely bright for astronomy.
                    </p>
                    <p className="text-xl leading-relaxed mb-8 text-gray-200">
                        The satellites are most visible during twilight because they're still illuminated by the Sun while the sky is darkening. They orbit at different altitudes, with Starlink usually at 550km and OneWeb is higher at 1,200km. The higher satellites stay illuminated longer into the night, creating different patterns of interference. At 550km, a satellite takes roughly 90 minutes to complete one orbit around Earth, moving at extremely fast across the sky. It's fast enough to cross through a telescope's field of view in seconds, but slow enough to ruin long exposure images that might take minutes or hours to capture.                     <button className='text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-3xl italic'><a href="https://www.scientificamerican.com/article/spacexs-starlink-satellites-leave-streaks-in-asteroid-hunting-telescopes-images/">Scientific American</a></button>

                    </p>
                </MotionDiv>

                <MotionDiv variants={textRevealVariants} className="prose prose-lg max-w-none mb-10 prose-invert">

                    <div className="my-8 bg-neutral-800 rounded-xl p-6 border-l-4 border-[#218d5b]">
                        <p className="text-xl font-semibold mb-2 text-[#218d5b]">The worst part?</p>
                        <p className="text-gray-300">
                            The satellites especially mess up twilight observations. This is a problem, as
                            astronomers use these to search for potentially hazardous asteroids that... you know...
                            could hit Earth someday. Great.
                        </p>
                    </div>

                    <div>
                        <p className="text-xl leading-relaxed mb-8 text-gray-200">
                            However, sattelites affect more than just large observatories. Both professional and amateur stargazers have reported challenges with their observations due to these orbiting objects.
                            The issue extends beyond visual astronomy to include radio frequency observations as well. Research has detected signals from satellites in frequency ranges used for astronomical research, potentially causing interference with scientific instruments.
                            Larger radio astronomy projects also have experienced reduced effectiveness in certain observation bands due to satellite transmissions.
                        </p>
                    </div>
                </MotionDiv>
                <MotionDiv
                    variants={fadeIn}
                    className="my-12 rounded-lg overflow-hidden shadow-xl"
                >
                    <Image
                        src="/spacex1.jpg"
                        alt="SAT Streaks Visualization"
                        width={800}
                        height={450}
                        className="w-full h-auto"
                    />
                    <div className="text-sm text-neutral-400 flex text-center">
                        The photo combines numerous exposures taken over just 30 minutes to illustrate the number of satellite streaks that can appear in long exposure photos.                    </div>
                </MotionDiv>
                <MotionDiv
                    variants={itemVariants}
                    className="text-3xl font-bold text-[#218d5b] mb-6 mt-12"
                >
                    The Other Side of the Argument
                </MotionDiv>

                <MotionDiv variants={textRevealVariants} className="prose prose-lg max-w-none mb-10 prose-invert text-xl">
                    <p className="text-gray-200">
                        However, these satellites exist for the benefit of human beings. Recent data from the International Telecommunication Union (ITU) shows that approximately 33 percent of the global population (about 2.6 billion people) remains unconnected <button className='text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-3xl italic'><a href="https://dig.watch/updates/itu-report-one-third-of-the-global-population-remains-unconnected">Dig Watch</a></button>. About half the world still lacks decent
                        internet access. Satellite internet connects billions of people in remote
                        areas, enabling education, healthcare, and economic opportunities. At the end of the day, that's
                        probably more important than messing up a picture. The development of satellite technology is our future, and at
                        the end of the day, they are meant to help humanity.
                    </p>

                    <p className='mt-6'>
                        This perspective aligns with what many satellite creating companies argue, as they intend to bridge the digital divide through satellite technology and create transformative social and economic opportunities for underserved communities worldwide. While astronomical concerns are valid, satellite internet providers like Starlink are working to mitigate their negative impacts through design modifications such as DarkSat and VisorSat technologies that aim to reduce satellite brightness.
                    </p>
                </MotionDiv>
                <MotionDiv
                    variants={fadeIn}
                    className="my-12 rounded-lg overflow-hidden shadow-xl"
                >
                    <Image
                        src="/spacex.jpg"
                        alt="SAT Streaks Visualization"
                        width={800}
                        height={450}
                        className="w-full h-auto"
                    />
                </MotionDiv>
                <MotionDiv
                    variants={itemVariants}
                    className="text-3xl font-bold text-[#218d5b] mb-6 mt-16"
                >
                    Finding Solutions to the Problem
                </MotionDiv>

                <MotionDiv variants={textRevealVariants} className="prose prose-lg max-w-none mb-10 prose-invert">
                    <p className="text-gray-200 text-xl">
                        SpaceX has actually tried to address these concerns. As stated earlier, they've experimented with
                        "DarkSat" (coated with dark material) and "VisorSat" (with sun shields), though
                        neither has fully solved the problem. However, the satellites are still too bright for
                        many astronomical observations. <button className='text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-3xl italic'><a href="https://www.theindianwire.com/space/spacex-most-recent-starlink-mission-launch-271569/">The Indian Wire</a></button>
                    </p>

                    <p className="text-gray-200 text-xl mt-6">
                        Software solutions to remove satellite trails from images show some promise. Programs can identify linear streaks and attempt to reconstruct the data that would have been there. But this approach has serious limitations, as it can't recover information from completely saturated pixels, and it introduces uncertainties that can compromise scientific accuracy. In fact, software is now so advanced that by the time you read this, popular LLM models (such as ChatGPT and Gemini) and other progams such as Canva and Adobe Photoshop can easily remove these streaks from images.
                    </p>
                    <p className="text-gray-200 text-xl mt-6">
                        Some observatories are exploring hardware mitigations like faster cameras that can take multiple short exposures instead of one long one, making it easier to remove affected frames. Others are looking at electronic shutters that could briefly "close" when a satellite passes overhead. These adaptations come with their own costs and limitations.
                    </p>
                    <p className="text-gray-200 text-xl mt-6">
                        The physics of the problem are challenging. Any object in low Earth orbit will reflect sunlight, and the larger the object is and the more reflective its materials, the brighter it appears. Satellites need solar panels for power, and those panels are necessarily reflective to capture solar energy. That, as a result, creates a reflection of light, causing conflicts between satellite functionality and astronomical visibility.
                        However, astronomers are adapting to fix the problem, developing tracking systems to schedule observations around satellite passes.
                        Software solutions like "trail masking" can salvage images by identifying satellite trails and digitally removing them. But it isn't always perfect really, as when satellites are very bright, they can saturate the detector (basically overexposing that part of the image), making it impossible to recover what was behind them. It's also problematic for time-sensitive observations like transient events (supernovae, gamma ray bursts, etc.) where you can't just try again later. <button className='text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-3xl italic'><a href="https://www.scientificamerican.com/article/spacexs-starlink-satellites-leave-streaks-in-asteroid-hunting-telescopes-images/">Scientific American</a></button>
                    </p>

                    <div className="gap-6 my-8">

                        <div className="bg-neutral-800 rounded-xl p-6 border-l-4 border-[#218d5b]">
                            <h3 className="font-bold text-xl text-[#218d5b] mb-3">Updates</h3>
                            <p className="text-gray-300">The FCC has acknowledged that satellite operators should ensure they do not burden astronomy and other research endeavors, but meaningful international regulations have yet to been made.</p>
                        </div>
                    </div>
                </MotionDiv>
                <MotionDiv
                    variants={fadeIn}
                    className="my-12 rounded-lg overflow-hidden shadow-xl"
                >
                    <Image
                        src="/spacex2.jpg"
                        alt="SAT Streaks Visualization"
                        width={800}
                        height={450}
                        className="w-full h-auto"
                    />
                    <div className="text-sm text-neutral-400 flex text-center ml-20">
                        &quot;SpaceX satellites soaring across the night sky have many wondering what they are.&quot; - Richard Bednarski
                    </div>
                </MotionDiv>

                <MotionDiv
                    variants={itemVariants}
                    className="text-2xl lg:text-3xl font-bold text-[#218d5b] mb-6 mt-12"
                >
                    My Take
                </MotionDiv>

                <MotionDiv variants={textRevealVariants} className="prose prose-lg text-xl max-w-none prose-invert">
                    <p className="text-gray-200">
                        Honestly, I think both sides have valid points. We shouldn't have to choose
                        between exploring the universe and connecting humanity, as both are necessary. But, to pick
                        a side, I'd lean towards advancing humanity. Satellites are needed for mankind as of now, as technology has become reliant on our space software. Satellites are mandatory for connecting people around the world, and its a worth sacrifice for a few streaks in images.
                    </p>

                    <p className="text-gray-200 mt-6">
                        However, the best path forward however involves continued cooperation between astronomers and
                        satellite companies, better satellite designs, lower orbits (under 600km),
                        and clear international regulations. SpaceX deserves credit for engaging with
                        astronomers, but I think they still need to do more. We still do need to observe these constellations, as it is as necessary to advance our astronomy as it is to advance our space technology. So, at the end of the day, while satellites are important, they can be changed to make astronomers happy as well by reducing the brightness of the machines.
                    </p>

                </MotionDiv>

            </MotionDiv>

            {/* Footer */}
            <div>
                <div className='border-t-1 border-neutral-700 mt-4 '>
                    <div className="container mx-auto px-5 py-10 max-w-4xl">

                        <div className="text-neutral-300">
                            Physics 20B, Cosomology
                        </div>
                        <div className="text-neutral-500">
                            Written by <a href="https://www.calebvergene.com/" className='underline'>Caleb Vergene</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;