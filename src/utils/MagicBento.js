import gsap from 'gsap';

export class MagicBento {
    constructor(container, options = {}) {
        this.container = container;
        this.cards = Array.from(container.querySelectorAll('.magic-bento-card'));
        this.options = {
            spotlightRadius: options.spotlightRadius || 400,
            glowColor: options.glowColor || '255, 0, 51',
            glitchColor: '0, 255, 255',
            enableParticles: options.enableParticles !== false,
            idleAnimation: options.idleAnimation !== false,
            backgroundMode: options.backgroundMode || false,
            enableDotGrid: options.enableDotGrid || true // New: Dot Grid
        };

        this.spotlight = null;
        this.canvas = null;
        this.ctx = null;
        this.dots = [];
        this.mouse = { x: 0, y: 0 };

        this.init();
    }

    init() {
        if (this.options.enableDotGrid) {
            this.initDotGrid();
        }

        if (!this.options.backgroundMode) {
            this.createGlobalSpotlight();
        }

        this.cards.forEach((card, index) => {
            this.initCard(card, index);
        });

        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('resize', () => this.handleResize());
    }

    initDotGrid() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'absolute inset-0 z-[-1] pointer-events-none opacity-40';
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.resizeCanvas();
        this.createDots();
        this.animateDots();
    }

    resizeCanvas() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createDots(); // Re-create on resize
    }

    handleResize() {
        this.resizeCanvas();
    }

    createDots() {
        if (!this.canvas) return;
        this.dots = [];
        const spacing = 40; // Grid spacing
        const cols = Math.ceil(this.canvas.width / spacing);
        const rows = Math.ceil(this.canvas.height / spacing);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                this.dots.push({
                    x: i * spacing,
                    y: j * spacing,
                    originX: i * spacing,
                    originY: j * spacing,
                    size: 1.5,
                    opacity: 0.2
                });
            }
        }
    }

    animateDots() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update time for flow
        this.time = (this.time || 0) + 0.01;

        // Update and draw dots
        const mouseX = this.mouse.x;
        const mouseY = this.mouse.y;
        const radius = 300; // Interaction radius

        this.dots.forEach(dot => {
            // Flow Animation (Air Effect)
            // Use sin/cos wave info based on position
            const waveX = Math.sin(dot.originY * 0.01 + this.time) * 10;
            const waveY = Math.cos(dot.originX * 0.01 + this.time) * 10;

            const currentX = dot.originX + waveX;
            const currentY = dot.originY + waveY;

            // Distance from mouse (using current wavy position)
            const dx = mouseX - currentX;
            const dy = mouseY - currentY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            let scale = 1;
            let alpha = 0.2;
            let color = '255, 255, 255';

            if (dist < radius) {
                const nav = (1 - dist / radius);
                scale = 1 + nav * 1.5; // Scale up near mouse
                alpha = 0.2 + nav * 0.6;
                // Tint red near mouse
                color = this.options.glowColor;
            }

            // Draw Dot
            this.ctx.fillStyle = `rgba(${color}, ${alpha})`;
            this.ctx.beginPath();
            this.ctx.arc(currentX, currentY, dot.size * scale, 0, Math.PI * 2);
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animateDots());
    }

    createGlobalSpotlight() {
        this.spotlight = document.createElement('div');
        this.spotlight.className = 'global-spotlight fixed pointer-events-none rounded-full z-50 mix-blend-screen opacity-0 transition-opacity duration-300';
        this.spotlight.style.width = '800px';
        this.spotlight.style.height = '800px';
        this.spotlight.style.background = `radial-gradient(circle, 
        rgba(${this.options.glowColor}, 0.15) 0%, 
        rgba(${this.options.glowColor}, 0.05) 30%, 
        transparent 70%)`;
        this.spotlight.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(this.spotlight);
    }

    initCard(card, index) {
        // Idle Animation
        if (this.options.idleAnimation) {
            const duration = 4 + Math.random() * 3;
            // Larger movement range for background mode to feel like "floating style"
            const moveY = this.options.backgroundMode ? 30 : 10;

            gsap.to(card, {
                y: -moveY - Math.random() * moveY,
                duration: duration,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: Math.random() * 2
            });

            gsap.to(card, {
                rotationX: (Math.random() - 0.5) * 10,
                rotationY: (Math.random() - 0.5) * 10,
                duration: duration * 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: Math.random() * 2
            });
        }

        // Hover Logic - Disabled in Background Mode
        if (!this.options.backgroundMode) {
            card.addEventListener('mouseenter', () => this.handleCardEnter(card));
            card.addEventListener('mouseleave', () => this.handleCardLeave(card));
            card.addEventListener('mousemove', (e) => this.handleCardMove(e, card));
        }
    }

    handleMouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;

        if (this.spotlight) {
            gsap.set(this.spotlight, { left: e.clientX, top: e.clientY });

            // Check if near grid (only if not background mode)
            if (!this.options.backgroundMode) {
                const containerRect = this.container.getBoundingClientRect();
                const isNear = (e.clientX > containerRect.left - 100 && e.clientX < containerRect.right + 100 && e.clientY > containerRect.top - 100 && e.clientY < containerRect.bottom + 100);
                gsap.to(this.spotlight, { opacity: isNear ? 1 : 0, duration: 0.5 });

                if (isNear) {
                    this.cards.forEach(card => {
                        const rect = card.getBoundingClientRect();
                        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                    });
                }
            }
        }
    }

    // ... Existing Enter/Leave/Move/Particles methods ...
    handleCardEnter(card) {
        gsap.to(card, {
            scale: 1.05,
            zIndex: 20,
            boxShadow: `0 20px 50px rgba(${this.options.glowColor}, 0.3), 0 0 20px rgba(${this.options.glowColor}, 0.1) inset`,
            borderColor: `rgba(${this.options.glowColor}, 0.8)`,
            duration: 0.4,
            ease: 'back.out(1.7)'
        });
        if (this.options.enableParticles) this.createParticles(card);
    }

    handleCardLeave(card) {
        gsap.to(card, {
            scale: 1,
            zIndex: 1,
            boxShadow: 'none',
            borderColor: 'rgba(255,255,255,0.1)',
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        const particles = card.querySelectorAll('.particle');
        particles.forEach(p => p.remove());
    }

    handleCardMove(e, card) {
        // ... existing logic ...
        const rect = card.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.1,
            ease: 'none'
        });
    }

    createParticles(card) {
        // ... existing logic ...
        for (let i = 0; i < 8; i++) {
            const p = document.createElement('div');
            p.className = 'particle absolute rounded-full pointer-events-none bg-white box-shadow-glow';
            p.style.width = Math.random() * 4 + 2 + 'px';
            p.style.height = p.style.width;
            p.style.backgroundColor = `rgb(${this.options.glowColor})`;

            const rect = card.getBoundingClientRect();
            p.style.left = Math.random() * rect.width + 'px';
            p.style.top = Math.random() * rect.height + 'px';

            card.appendChild(p);

            gsap.fromTo(p,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 0.8,
                    duration: 0.3,
                    onComplete: () => {
                        gsap.to(p, {
                            y: -100 - Math.random() * 50,
                            x: (Math.random() - 0.5) * 50,
                            opacity: 0,
                            duration: 1 + Math.random(),
                            onComplete: () => p.remove()
                        });
                    }
                }
            );
        }
    }
}
