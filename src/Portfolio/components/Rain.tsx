import { useEffect, useRef } from "react";

/**
 * 
 * @param param0 
 * @returns 
 */
export default function Rain({ onDone }: { onDone: () => void }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const c = ref.current;
        if (!c) {
            return;
        }
        const ctx = c.getContext("2d");
        if (!ctx) {
            return;
        }
        const w = (c.width = window.innerWidth);
        const h = (c.height = window.innerHeight);
        const size = 16;
        const drops = Array.from({ length: Math.floor(w / size) }, () => Math.random() * -50);
        const chars = "{}[]()<>=;:/*+-01";
        const id = setInterval(() => {
            ctx.fillStyle = "rgba(15,27,51,0.12)";
            ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = "#FFC857";
            ctx.font = size + "px 'IBM Plex Mono', monospace";
            drops.forEach((y, i) => {
                ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * size, y * size);
                drops[i] = y * size > h && Math.random() > 0.97 ? 0 : y + 1;
            });
        }, 50);
        const t = setTimeout(onDone, 5000);
        return () => {
            clearInterval(id);
            clearTimeout(t);
        };
    }, [onDone]);

    return <canvas ref={ref} className="rain" onClick={onDone} aria-label="Code rain. Click to dismiss." />;
}