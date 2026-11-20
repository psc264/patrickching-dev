import { useState } from "react";
import { ME } from "../content";

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const tags = ["All", ...Array.from(new Set(ME.projects.flatMap((p) => p.tags)))];
    const shown = ME.projects.filter((p) => filter === "All" || p.tags.includes(filter));

    return (
        <section>
        <h2>Projects</h2>
        <div className="chips" role="group" aria-label="Filter projects">
            {tags.map((t) => (
            <button key={t} className={"chip" + (t === filter ? " on" : "")} onClick={() => setFilter(t)} aria-pressed={t === filter}>
                {t}
            </button>
            ))}
        </div>
        <ul className="projects">
            {shown.map((p) => (
            <li key={p.title}>
                <a href={p.link}>
                <span className="ptitle">{p.title}</span>
                <span className="pdesc">{p.desc}</span>
                <span className="ptags">{p.tags.join(", ")}</span>
                </a>
            </li>
            ))}
        </ul>
        </section>
    );
}