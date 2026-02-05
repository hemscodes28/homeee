import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MagicBento } from '../../utils/MagicBento.js';
import { TornPaperEffect } from '../../utils/TornPaperEffect.js';
import { initParticles } from '../../utils/Particle.js';
import { FuzzyText } from '../../utils/FuzzyText.js';
import { Countdown } from '../../utils/Countdown.js';
import { ParticleRing } from '../../utils/ParticleRing.js';
import bgLights from '../../assets/images/home/bg-lights.png';
import './Home.css';

const Home = () => {
    const homePageRef = useRef(null);
    const tornPaperRef = useRef(null);
    const fuzzyTitleRef = useRef(null);
    const fuzzySubtitleRef = useRef(null);
    const countdownRef = useRef(null);
    const heroRingRef = useRef(null);
    const heroCountdownRef = useRef(null);
    // const bentoRef = useRef(null); // Commented out in original

    useEffect(() => {
        let particlesCleanup;
        let fuzzyTitle;
        let fuzzySubtitle;
        let tornPaper;
        let countdown;
        let heroRing;
        let heroCountdown;

        // Clear refs manually before init as a safety measure
        if (fuzzyTitleRef.current) fuzzyTitleRef.current.innerHTML = '';
        if (fuzzySubtitleRef.current) fuzzySubtitleRef.current.innerHTML = '';
        if (tornPaperRef.current) tornPaperRef.current.innerHTML = '';
        if (countdownRef.current) countdownRef.current.innerHTML = '';
        if (heroRingRef.current) heroRingRef.current.innerHTML = '';
        if (heroCountdownRef.current) heroCountdownRef.current.innerHTML = '';

        // 0. Initialize Particles Background
        if (homePageRef.current) {
            particlesCleanup = initParticles(homePageRef.current);
        }

        // 1. Initialize Fuzzy Text Effect
        if (fuzzyTitleRef.current) {
            fuzzyTitle = new FuzzyText(fuzzyTitleRef.current, {
                text: 'INTELLINA',
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                fontWeight: 900,
                color: '#fff',
                glitchMode: true,
                fuzzRange: 15,
                baseIntensity: 0.1,
                hoverIntensity: 0.4
            });
        }

        if (fuzzySubtitleRef.current) {
            fuzzySubtitle = new FuzzyText(fuzzySubtitleRef.current, {
                text: '2K26',
                fontSize: 'clamp(2rem, 6vw, 5rem)',
                fontWeight: 700,
                color: '#ff0033',
                glitchMode: true,
                fuzzRange: 20,
                baseIntensity: 0.2,
                hoverIntensity: 0.6,
                className: 'transform -rotate-2 font-mono'
            });
        }

        // 1. Initialize Torn Paper Effect on BACKGROUND
        if (tornPaperRef.current) {
            tornPaper = new TornPaperEffect(tornPaperRef.current, {
                particleCount: 50,
                glowColor: '255, 255, 255', // White color
                enableUpsideDown: true,
                speed: 0.3 // Slower speed
            });
        }

        // 2. Initialize Premium Countdown with Custom Component
        if (countdownRef.current) {
            countdown = new Countdown(countdownRef.current, '2026-03-06T09:30:00');
        }

        // 3. Initialize Hero Section Enhancements (Particle Ring + Small Countdown)
        if (heroRingRef.current) {
            heroRing = new ParticleRing(heroRingRef.current, {
                particleCount: 2000,
                minRadius: 100,
                maxRadius: 250,
                depth: 100,
                leftColor: [255, 0, 51], // Red
                rightColor: [100, 0, 0]  // Dark Red
            });
        }

        if (heroCountdownRef.current) {
            heroCountdown = new Countdown(heroCountdownRef.current, '2026-03-06T09:30:00');
        }

        // Cleanup function
        return () => {
            if (particlesCleanup) particlesCleanup();
            if (fuzzyTitle) fuzzyTitle.destroy();
            if (fuzzySubtitle) fuzzySubtitle.destroy();
            if (tornPaper) tornPaper.destroy();
            if (countdown) countdown.stop();
            if (heroRing) heroRing.destroy();

            // Final safety clear of InnerHTML
            if (fuzzyTitleRef.current) fuzzyTitleRef.current.innerHTML = '';
            if (fuzzySubtitleRef.current) fuzzySubtitleRef.current.innerHTML = '';
            if (tornPaperRef.current) tornPaperRef.current.innerHTML = '';
            if (countdownRef.current) countdownRef.current.innerHTML = '';
            if (heroRingRef.current) heroRingRef.current.innerHTML = '';
        };
    }, []);

    return (
        <div id="home-page" ref={homePageRef} className="relative min-h-screen w-full bg-black scroll-smooth overflow-x-hidden">

            {/* BACKGROUND: Torn Paper Effect Container */}
            <div id="torn-paper-background" ref={tornPaperRef} className="fixed inset-0 z-0 opacity-60 pointer-events-none"></div>

            {/* BACKGROUND: Magic Bento Grid (Revolving) */}
            <div id="magic-bento-background" className="fixed inset-0 z-0 opacity-40 pointer-events-none perspective-1000 overflow-visible">
                <div className="absolute inset-0 flex items-center justify-center transform-style-3d animate-slow-rotate">
                    {/* Generating abstract bento shapes for background */}
                    <div className="magic-bento-card absolute w-64 h-64 bg-st-red/10 border border-st-red/20 rounded-xl" style={{ top: '10%', left: '20%', transform: 'translateZ(-100px)' }}></div>
                    <div className="magic-bento-card absolute w-80 h-56 bg-st-red/5 border border-white/10 rounded-xl" style={{ top: '60%', left: '70%', transform: 'translateZ(50px)' }}></div>
                    <div className="magic-bento-card absolute w-48 h-48 bg-st-red/10 border border-st-red/30 rounded-xl" style={{ top: '30%', left: '80%', transform: 'translateZ(-200px) rotate(45deg)' }}></div>
                    <div className="magic-bento-card absolute w-96 h-64 bg-st-red/5 border border-white/10 rounded-xl" style={{ top: '70%', left: '10%', transform: 'translateZ(100px)' }}></div>
                    <div className="magic-bento-card absolute w-56 h-56 bg-st-red/5 border border-white/5 rounded-xl" style={{ top: '15%', left: '50%', transform: 'translateZ(0px)' }}></div>
                    <div className="magic-bento-card absolute w-72 h-40 bg-st-red/10 border border-st-red/20 rounded-xl" style={{ bottom: '20%', right: '40%', transform: 'translateZ(-50px)' }}></div>
                </div>
                {/* Fog/Lights Overlay */}
                <div className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-50" style={{ backgroundImage: `url(${bgLights})` }}></div>
            </div>

            {/* Main Content Split - Note: Navbar is now in Layout */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-12 min-h-screen flex flex-col justify-center pointer-events-none">
                {/* Pointer events re-enabled on interactive children */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32">

                    {/* Left Column: Redesigned Hero Typography */}
                    <div className="w-full lg:w-[50%] flex flex-col items-center text-center space-y-8 animate-slide-up opacity-0 pointer-events-auto" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
                        <div className="flex flex-col space-y-2 items-center">
                            <span className="hero-presents">Department of Artificial Intelligence & Data Science presents</span>
                            <span className="hero-symposium">National Level Technical Symposium</span>
                        </div>

                        <div className="relative w-full flex justify-center mb-8">
                            <div className="relative inline-block overflow-visible">
                                {/* Fuzzy Text Containers - Restored Overlapping Layout */}
                                <div id="fuzzy-title" ref={fuzzyTitleRef} className="relative z-10 leading-none"></div>
                                <div id="fuzzy-subtitle" ref={fuzzySubtitleRef} className="absolute bottom-[-1.5rem] right-[-1rem] md:right-[-2.5rem] mix-blend-screen z-20 pointer-events-none opacity-90 leading-none"></div>
                            </div>
                        </div>

                        <p className="hero-description dropdown-shadow-lg mx-auto">
                            "Intellina 2k26" is the premier national level technical symposium hosted by the&nbsp;
                            <span className="text-st-red font-bold">Department of AI & DS</span> at C.I.T.
                            Enter a dimension where technology meets the supernatural, featuring high-stakes coding battles,
                            AI innovations, and the ultimate technical challenges.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 pt-4">
                            {/* Play/Register Button */}
                            <button className="flex items-center gap-3 px-10 py-3 bg-white text-black font-bold text-lg rounded-md hover:bg-white/80 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                REGISTER
                            </button>

                            {/* My List/Explore Button */}
                            <Link to="/events" className="flex items-center gap-3 px-10 py-3 bg-gray-500/30 backdrop-blur-md text-white border border-gray-400/30 font-bold text-lg rounded-md hover:bg-gray-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
                                <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>
                                EXPLORE EVENTS
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Hero Visual */}
                    <div className="w-full lg:w-[45%] flex justify-center lg:justify-end animate-slide-up opacity-0 pointer-events-auto" style={{ animationFillMode: 'forwards', animationDelay: '0.4s' }}>
                        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                            {/* Particle Ring Background moved/removed or kept for robot? User said "below robot". I'll keep the rings around robot. */}
                            <div ref={heroRingRef} className="absolute inset-0 z-0 pointer-events-none"></div>

                            {/* Holographic Rings */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-2 border-st-red/15 rounded-full animate-spin-slow pointer-events-none" style={{ boxShadow: '0 0 40px rgba(255,0,51,0.2)' }}></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-st-red/25 rounded-full animate-spin-reverse pointer-events-none"></div>

                            <div className="st-robot-container group/robot relative z-10 w-full h-full overflow-hidden">
                                <div className="robot-speech-bubble">
                                    <span>Hi! Do register for<br />Intellina</span>
                                </div>
                                <div className="st-robot-wrapper w-full h-full relative">
                                    <iframe src='https://my.spline.design/genkubgreetingrobot-fzWnKIUrSKa0RwHGiBYduZeq/' frameBorder='0' width='100%' height='100%'></iframe>
                                    {/* Spline Watermark Hider Overlay */}
                                    <div className="absolute bottom-0 right-0 w-32 h-12 bg-black/0 z-50 pointer-events-auto cursor-default" title="Spline Watermark Hider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Countdown Timer Section */}
            <div id="countdown-section" className="relative z-10 container mx-auto px-6 py-16 pb-24">
                <div className="flex flex-col items-center justify-center space-y-8 animate-slide-up opacity-0 pointer-events-auto" style={{ animationFillMode: 'forwards', animationDelay: '0.8s' }}>
                    <div className="text-center space-y-3">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-wider" style={{ textShadow: '0 0 30px rgba(255,0,51,0.6)' }}>
                            EVENT COUNTDOWN
                        </h2>
                        <p className="text-gray-400 text-lg font-medium tracking-wide">
                            Time Until Intellina 2K26 Begins
                        </p>
                    </div>

                    <div className="relative w-full max-w-4xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-st-red/20 via-st-red/30 to-st-red/20 rounded-2xl blur-2xl opacity-60 animate-pulse-slow"></div>
                        <div className="relative glass-premium glass-premium--red rounded-2xl p-8 md:p-12 border-2 border-st-red/40 overflow-hidden group/timer">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,0,51,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px', animation: 'grid-move 20s linear infinite' }}></div>
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-st-red rounded-tl-2xl opacity-60"></div>
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-st-red rounded-tr-2xl opacity-60"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-st-red rounded-bl-2xl opacity-60"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-st-red rounded-br-2xl opacity-60"></div>
                            <div id="premium-countdown" ref={countdownRef} className="st-countdown-container relative z-10"></div>
                            <div className="relative z-10 mt-8 pt-6 border-t border-st-red/30 flex items-center justify-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-st-red animate-pulse"></div>
                                <span className="text-xs uppercase tracking-[0.3em] text-st-red/80 font-bold">LIVE COUNTDOWN // MARCH 6, 2026</span>
                                <div className="w-2 h-2 rounded-full bg-st-red animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id="about" className="relative z-10 container mx-auto px-6 py-32 border-t border-st-red/10">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter" style={{ textShadow: '0 0 50px rgba(255,0,51,0.8)' }}>
                            ABOUT THE EVENT
                        </h2>
                        <div className="h-1 w-32 bg-st-red mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg leading-relaxed">
                        <div className="space-y-6">
                            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-st-red first-letter:mr-3 first-letter:float-left">
                                Intellina 2k26 is a journey into the uncharted territories of artificial intelligence and supernatural technology.
                                Hosted by the Department of AI & DS at CIT, we bridge the gap between reality and the extraordinary.
                            </p>
                        </div>
                        <div className="glass-premium p-8 rounded-2xl border border-st-red/30">
                            <h3 className="text-st-red font-bold text-xl mb-4 tracking-widest">WHY JOIN?</h3>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-start gap-3">
                                    <span className="text-st-red mt-1">▶</span>
                                    <span>High stakes technical challenges with premium rewards.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-st-red mt-1">▶</span>
                                    <span>Networking with industry leaders in AI and Data Science.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-st-red mt-1">▶</span>
                                    <span>A cinematic experience like no other.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Events Section */}
            <div id="events" className="relative z-10 container mx-auto px-6 py-32 border-t border-st-red/10">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter" style={{ textShadow: '0 0 50px rgba(255,0,51,0.8)' }}>
                            SYMPOSIUM EVENTS
                        </h2>
                        <p className="text-st-red tracking-[0.5em] font-bold">CHOOSE YOUR CHALLENGE</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-premium p-10 rounded-2xl border border-st-red/20 group hover:border-st-red/50 transition-all duration-500">
                            <div className="text-4xl mb-6">⚙️</div>
                            <h3 className="text-2xl font-black text-white mb-4">TECHNICAL</h3>
                            <p className="text-gray-400 mb-8">From competitive coding to AI innovation, prove your technical prowess.</p>
                            <Link to="/events" className="text-st-red font-bold tracking-widest hover:text-white transition-colors">EXPLORE →</Link>
                        </div>
                        <div className="glass-premium p-10 rounded-2xl border border-white/10 group hover:border-st-red/50 transition-all duration-500">
                            <div className="text-4xl mb-6">🎮</div>
                            <h3 className="text-2xl font-black text-white mb-4">NON-TECH</h3>
                            <p className="text-gray-400 mb-8">Creative challenges, gaming, and strategy events for everyone.</p>
                            <Link to="/events" className="text-st-red font-bold tracking-widest hover:text-white transition-colors">EXPLORE →</Link>
                        </div>
                        <div className="glass-premium p-10 rounded-2xl border border-st-red/40 group hover:border-st-red/70 transition-all duration-500 bg-st-red/5">
                            <div className="text-4xl mb-6">🔥</div>
                            <h3 className="text-2xl font-black text-st-red mb-4">FLAGSHIP</h3>
                            <p className="text-gray-400 mb-8">The ultimate cinematic battle. Only for the true roarers.</p>
                            <Link to="/events" className="text-st-red font-bold tracking-widest hover:text-white transition-colors">EXPLORE →</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="relative z-10 container mx-auto px-6 py-32 border-t border-st-red/10">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter" style={{ textShadow: '0 0 50px rgba(255,0,51,0.8)' }}>
                            GET IN TOUCH
                        </h2>
                        <p className="text-st-red tracking-[0.3em] font-bold">THE GATE IS OPEN</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="glass-premium p-8 rounded-2xl border border-st-red/20 space-y-6">
                            <div className="space-y-2">
                                <label className="text-st-red text-xs font-black tracking-widest uppercase">Email</label>
                                <p className="text-xl font-bold text-white">intellina2k26@cit.edu.in</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-st-red text-xs font-black tracking-widest uppercase">Location</label>
                                <p className="text-xl font-bold text-white">CIT Main Campus, Coimbatore</p>
                            </div>
                        </div>
                        <div className="glass-premium p-8 rounded-2xl border border-st-red/20 flex flex-col justify-center items-center space-y-4">
                            <p className="text-gray-400 text-center">Follow the roar on social media for real-time updates.</p>
                            <div className="flex gap-6 text-2xl">
                                <span className="cursor-pointer hover:text-st-red transition-colors">📸</span>
                                <span className="cursor-pointer hover:text-st-red transition-colors">🐦</span>
                                <span className="cursor-pointer hover:text-st-red transition-colors">💼</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[20vh]"></div>
        </div>
    );
};

export default Home;
