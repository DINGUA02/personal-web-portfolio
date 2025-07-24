import { useEffect } from "react";

export const GradientMouse = ({ children }) => {
    if (window.innerWidth < 768) return;

    useEffect(()=>{
        const gradient = document.getElementById('gradient-mouse');

        const handleCursorMovement = (e) => {
            if (gradient) {
                const { clientX: x, clientY: y } = e;
                gradient.style.background = `radial-gradient(400px at ${x}px ${y}px, rgba(120,119,198,0.15), transparent 80%)`;
            }       
        };

        window.addEventListener('mousemove', handleCursorMovement);
        return () => window.removeEventListener('mousemove', handleCursorMovement);
    },[]);

    return(
        <>
        <div
            id="gradient-mouse"
            className="pointer-events-none fixed inset-0 z-[-1] transition duration-300">
        </div>
        {children}
        </>
    );
}