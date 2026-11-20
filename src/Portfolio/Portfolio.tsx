import { useState, useCallback } from "react";
import { ME } from "./content";
import { css } from "./styles";
import { useKonami } from "./hooks/useKonami";
import Avatar from "./components/Avatar";
import Terminal from "./components/Terminal";
import Rain from "./components/Rain";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CommitRoulette from "./components/CommitRoulette";
import TransformDemo from "./components/TransformDemo";

export default function Portfolio() {
    const [dark, setDark] = useState(false);
    const [rain, setRain] = useState(false);

    const toggleTheme = useCallback(() => {
        console.log("toggleTheme called");
        setDark((d) => !d);
    }, []);
    const stopRain = useCallback(() => setRain(false), []);
    const startRain = useCallback(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setRain(true);
    }, []);

    useKonami(startRain);

    return (
        <div className="site" data-theme={dark ? "dark" : "light"}>
        <style>{css}</style>
        {rain && <Rain onDone={stopRain} />}

        <header className="wrap top">
            <div className="identity">
                <Avatar />
                <span className="brand">{ME.name}</span>
            </div>

            <button
                className="ghost"
                onClick={toggleTheme}
                aria-pressed={dark}
            >
                {dark ? "Light mode" : "Dark mode"}
            </button>
        </header>

        <main className="wrap">
            <section className="hero">
            <h1>{ME.headline}</h1>
            <p className="lead">{ME.blurb}</p>
            <Terminal onTheme={toggleTheme} onRain={startRain} />
            <p className="hint">Poke around in the terminal. There is also a secret code from the 1980s.</p>
            </section>
            <Background />
            <Projects />
            <p className="lead">
                During my career I've built integrations using HL7, FHIR,
                databases, files, and REST APIs. This simple demo shows how
                structured data can be transformed into an HL7 message.
            </p>
            <TransformDemo />
            <Skills />
            <CommitRoulette />
        </main>

        <footer className="wrap foot">
            <span>
            Say hello: <a href={"mailto:" + ME.email}>{ME.email}</a>
            </span>
            <a href={ME.github}>GitHub</a>
        </footer>
        </div>
    );
}