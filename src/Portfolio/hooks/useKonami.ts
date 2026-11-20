import { useEffect } from "react";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

/** Calls onTrigger when the visitor types the Konami code. */
export function useKonami(onTrigger: () => void) {
    useEffect(() => {
        let pos = 0;
        const onKey = (e: KeyboardEvent) => {
            if (["Shift", "Control", "Alt", "Meta", "CapsLock"].includes(e.key)) return;
            const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
            pos = k === KONAMI[pos] ? pos + 1 : k === KONAMI[0] ? 1 : 0;
            if (pos === KONAMI.length) {
                pos = 0;
                onTrigger();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onTrigger]);
}