import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';
import Members from './pages/Members/Members';
import Flagship from './pages/Events/Flagship';
import Technical from './pages/Events/Technical';
import NonTech from './pages/Events/NonTech';
import Loader from './components/Loader/Loader';
import Transition from './components/Transition/Transition';

function App() {
    const [appState, setAppState] = useState('loading'); // 'loading', 'transition', 'ready'

    const handleLoaderComplete = () => {
        setAppState('transition');
    };

    const handleTransitionComplete = () => {
        setAppState('ready');
    };

    if (appState === 'loading') {
        return <Loader onEnter={handleLoaderComplete} />;
    }

    if (appState === 'transition') {
        return <Transition onComplete={handleTransitionComplete} />;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="events" element={<Events />}>
                        <Route path="flagship" element={<Flagship />} />
                        <Route path="technical" element={<Technical />} />
                        <Route path="non-tech" element={<NonTech />} />
                    </Route>
                    <Route path="contact" element={<Contact />} />
                    <Route path="members" element={<Members />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
