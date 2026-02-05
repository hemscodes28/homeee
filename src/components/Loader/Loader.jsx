import React, { useEffect, useState, useRef } from 'react';
import './Loader.css';

const Loader = ({ onEnter }) => {
    const [introHidden, setIntroHidden] = useState(false);
    const [viewportShow, setViewportShow] = useState(false);
    const [skipBtnShow, setSkipBtnShow] = useState(false);
    const musicRef = useRef(null);

    // Audio file
    const audioSrc = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/161676/music.mp3";

    useEffect(() => {
        musicRef.current = new Audio(audioSrc);
        return () => {
            if (musicRef.current) {
                musicRef.current.pause();
                musicRef.current = null;
            }
        };
    }, []);

    const startAnimation = () => {
        setIntroHidden(true);

        // Try playing music
        if (musicRef.current) {
            musicRef.current.play().catch(e => console.log('Audio autoplay blocked, normal interaction will fix'));
        }

        setTimeout(() => {
            setViewportShow(true);
            setSkipBtnShow(true);

            // Credits sequence duration matches the CSS animation
            // The long title animation takes 20s
            // We can emit onEnter after the sequence triggers the end
            setTimeout(() => {
                onEnter();
            }, 21000); // 19500 + 1500 (intro hide delay)

        }, 1500);
    };

    return (
        <div id="loader-wrapper">
            <div className={`intro ${introHidden ? 'intro--hide' : ''}`}>
                <h1 className="intro-title">INTELLINA 2K26</h1>
                <p className="intro-text intro-text--show" style={{ maxWidth: '600px', margin: '0 auto', letterSpacing: '0.5px' }}>
                    <span style={{ display: 'block', marginBottom: '1em', textTransform: 'uppercase', fontSize: '0.8em', letterSpacing: '2px', color: '#666' }}>-- U.S. DEPARTMENT OF ENERGY --</span>
                    The Department of AI & Data Science is cracking the dimensional barrier at C.I.T.
                    <br /><br />
                    <span style={{ color: '#fff', textShadow: '0 0 5px rgba(255,255,255,0.5)' }}>WARNING:</span> The frequencies are unstable.
                    Engage your audio transmitters for safe passage.
                    <br />

                    <button className="intro-text-play mt-8" onClick={startAnimation}>
                        OPEN THE GATE
                    </button>
                </p>
            </div>

            <div className={`viewport ${viewportShow ? 'viewport--show' : ''}`}>
                <div className="scene">
                    <div className="title title--full">
                        <div className="title-word">
                            <span className="title-word-letter" data-letter="S1">
                                <span className="title-word-letter-large">I</span>
                                <div className="titlebar titlebar--left"></div>
                            </span>
                            <span className="title-word-letter" data-letter="T1">N</span>
                            <span className="title-word-letter" data-letter="R1">T</span>
                            <span className="title-word-letter" data-letter="A">E</span>
                            <span className="title-word-letter" data-letter="N1">L</span>
                            <span className="title-word-letter" data-letter="G1">L</span>
                            <span className="title-word-letter" data-letter="E1">I</span>
                            <span className="title-word-letter" data-letter="E2">N</span>
                            <span className="title-word-letter" data-letter="R2">
                                <span className="title-word-letter-large">A</span>
                                <div className="titlebar titlebar--right"></div>
                            </span>
                            <div className="titlebar titlebar--top"></div>
                        </div>

                        <div></div>

                        <div className="title-word title-word-second">
                            <span className="title-word-letter" data-letter="T2">2</span>
                            <span className="title-word-letter" data-letter="H">K</span>
                            <span className="title-word-letter" data-letter="G2">2</span>
                            <span className="title-word-letter" data-letter="S2">6</span>
                        </div>
                    </div>

                    <div className="title title--scene title--scene0"></div>
                    <div className="title title--scene title--scene1"><div className="title-word"><div className="title-word-letter" data-letter="A">I</div></div></div>
                    <div className="title title--scene title--scene2"><div className="title-word"><div className="title-word-letter" data-letter="N">N</div></div></div>
                    <div className="title title--scene title--scene3"><div className="title-word"><div className="title-word-letter" data-letter="R">T</div><div className="title-word-letter" data-letter="I">I</div></div></div>
                    <div className="title title--scene title--scene4"><div className="title-word"><div className="title-word-letter" data-letter="S">L</div><div className="title-word-letter" data-letter="G">L</div></div></div>
                    <div className="title title--scene title--scene5"><div className="title-word"><div className="title-word-letter" data-letter="R">I</div><div className="title-word-letter" data-letter="S">N</div></div></div>
                    <div className="title title--scene title--scene6">
                        <div className="title-word">
                            <div className="title-word-letter" data-letter="I">I</div>
                            <div className="title-word-letter" data-letter="A">N</div>
                            <div className="title-word-letter" data-letter="T">T</div>
                            <div className="title-word-letter" data-letter="H">E</div>
                            <div className="title-word-letter" data-letter="N">L</div>
                            <div className="title-word-letter" data-letter="G">L</div>
                        </div>
                    </div>
                </div>

                <div className="credits">
                    <div className={`credits-group ${viewportShow ? 'credits-group--show' : ''}`} style={{ animationDelay: '300ms' }}><div className="credits-group-credit" data-text="A CIT Original Series">A CIT Original Series</div></div>
                    {/* Simplified credits for React version - CSS animations handle timing */}
                </div>
            </div>

            <div className="vignette"></div>
            <div className="grain"></div>
            <div className="letterbox">
                <div className="letterbox-cover letterbox-cover--top"></div>
                <div className="letterbox-cover letterbox-cover--left"></div>
                <div className="letterbox-cover letterbox-cover--right"></div>
                <div className="letterbox-cover letterbox-cover--bottom"></div>
            </div>

            <button
                className={`skip-intro-btn ${skipBtnShow ? 'skip-intro-btn--show' : ''}`}
                onClick={onEnter}
            >
                Skip Intro
            </button>
        </div>
    );
};

export default Loader;
