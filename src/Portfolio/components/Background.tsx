import { ME } from "../content";

export default function Background() {
    return (
        <section>
        <h2>Background</h2>
        <ol className="stages">
            {ME.background.map((s) => (
            <li key={s.title}>
                <span className="swhen" style={{ whiteSpace: "pre-line" }}>{s.when}</span>
                <div>
                <span className="stitle">{s.title}</span>
                <p>{s.detail}</p>
                </div>
            </li>
            ))}
        </ol>
        </section>
    );
}