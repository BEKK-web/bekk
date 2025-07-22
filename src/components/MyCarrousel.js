'use client';
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const MyCarrousel = ({ children, speed = 20, size = '100%' }) => {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = scrollRef.current;
        let animationFrame;
        let position = 0;

        const animate = () => {
            position -= speed / 100;
            if (Math.abs(position) >= scroll.scrollWidth / 2) {
                position = 0;
            }
            scroll.style.transform = `translateX(${position}px)`;
            animationFrame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, [speed]);

    // Duplicar los children para efecto infinito
    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                overflow: "hidden",
                width: size,
            }}
        >
            <div
                ref={scrollRef}
                style={{
                    display: "flex",
                    width: "max-content",
                    willChange: "transform",
                    gap: "1%", // Espacio entre imágenes
                }}
            >
                {children}
                {children}
            </div>
        </div >
    );
};

MyCarrousel.propTypes = {
    children: PropTypes.node.isRequired,
    speed: PropTypes.number,
};

export default MyCarrousel;