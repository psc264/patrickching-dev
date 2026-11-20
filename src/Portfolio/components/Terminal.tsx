import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { ME, JOKES } from "../content";

const WELCOME_MESSAGE = "Welcome. Type help to see what you can ask me.";
const WELCOME: Line = { k: "out", t: WELCOME_MESSAGE, };

type Line = { k: "in" | "out"; t: string };

type CommandResult = {
    lines: string[]; 
    action?: "theme" | "rain"; 
};

/**
 * 
 * @param param0 
 * @returns 
 */
export default function Terminal({ onTheme, onRain }: { onTheme: () => void; onRain: () => void }) {
    const [lines, setLines] = useState<Line[]>([WELCOME]);
    const [val, setVal] = useState("");
    const [hist, setHist] = useState<string[]>([]);
    const [hi, setHi] = useState(-1);
    const body = useRef<HTMLDivElement>(null);
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (body.current) {
            body.current.scrollTop = body.current.scrollHeight;
        }
    }, [lines]);

    const answer = (raw: string): CommandResult => {
        const cmd = raw.trim().toLowerCase();

        if (cmd === "help") {
            return {
                lines: [
                    "about       who I am",
                    "career      from the lab bench to code",
                    "skills      what I work with",
                    "projects    things I've built",
                    "contact     how to reach me",
                    "joke        a developer joke",
                    "theme       switch light & dark",
                    "matrix      make it rain",
                    "clear       empty the screen",
                ],
            };
        }
        if (cmd === "about") {
            return {
                lines: [ME.name + ", " + ME.role.toLowerCase() + ".", ME.blurb],
            };
        }
        if (cmd === "career") {
            return {
                lines: ME.background.map((s) => `${s.when}: ${s.title}`),
            };
        }
        if (cmd === "skills") {
            return {
                lines: Object.entries(ME.skills).map(([k, v]) => k + ": " + v.join(", ")),
            };
        }
        if (cmd === "projects") {
            return {
                lines: ME.projects.map((p) => p.title + ": " + p.desc),
            };
        }
        if (cmd === "contact") {
            return {
                lines: [ME.email, ME.github],
            };
        } 
        if (cmd === "joke") {
            return {
                lines: [JOKES[Math.floor(Math.random() * JOKES.length)]],
            };
        }
        if (cmd === "theme") {
            return {
                lines: ["Theme switched."],
                action: "theme",
            };
        }
        if (cmd === "matrix") {
            return {
                lines: ["Click anywhere on the rain to stop it."],
                action: "rain",
            };
        }
        if (cmd.startsWith("sudo")) {
            return {
                lines: ["Nice try. This incident will be reported."],
            };
        }
        if (cmd.startsWith("rm -rf")) {
            return {
                lines: ["Permission denied. Probably for the best."],
            };
        }
        if (cmd === "ls") {
            return {
                lines: ["about.txt  skills.txt  projects/  secrets/ (nothing to see)"],
            };
        }
        if (cmd === "") {
            return {
                lines: [],
            };
        }
        return {
            lines: ["command not found: " + cmd + ". Try help."],
        }
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const raw = val.trim();
        if (raw.toLowerCase() === "clear") {
            setLines([WELCOME]);
        } else {
            const result = answer(raw);

            switch (result.action) {
                case "theme":
                    onTheme();
                    break;

                case "rain":
                    onRain();
                    break;
            }

            setLines((l) => [
                ...l,
                { k: "in" as const, t: raw },
                ...result.lines.map((t) => ({
                    k: "out" as const,
                    t,
                })),
            ]);
        }

        if (raw) {
            setHist((h) => [raw, ...h]);
        }

        setHi(-1);
        setVal("");
    };
      
    const onKey = (e: ReactKeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp" && hist.length) {
            e.preventDefault();
            const n = Math.min(hi + 1, hist.length - 1);
            setHi(n);
            setVal(hist[n]);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const n = hi - 1;
            setHi(n);
            setVal(n >= 0 ? hist[n] : "");
        }
    };

    return (
        <div className="term" onClick={() => input.current && input.current.focus()}>
        <div className="term-bar">
            <span />
            <span />
            <span />
            <b>guest@patrickching</b>
        </div>
        <div className="term-body" ref={body} aria-live="polite">
            {lines.map((l, i) => (
            <div key={i} className={l.k === "in" ? "tin" : "tout"}>
                {l.k === "in" ? "$ " : ""}
                {l.t}
            </div>
            ))}
            <form onSubmit={submit} className="tprompt">
            <label htmlFor="cmd">$</label>
            <input
                id="cmd"
                ref={input}
                value={val}
                autoComplete="off"
                spellCheck="false"
                onChange={(e) => setVal(e.target.value)}
                onKeyDown={onKey}
                aria-label="Terminal command"
            />
            </form>
        </div>
        </div>
    );
}
